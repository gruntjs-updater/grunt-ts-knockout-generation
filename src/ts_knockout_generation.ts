///<reference path="../typings/node.d.ts" />
///<reference path="../typings/grunt.d.ts" />

function startup(grunt: IGrunt) {
    // We extend the String class
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str) {
            return this.slice(0, str.length) == str;
        };
    }

    // Registration of the task
    grunt.registerMultiTask("ts_knockout_generation", "Generate Knockout ViewModels in Typescript from C# ViewModels.", function () {
        /*
            Runtime
        */

        // We require the filesystem
        var filesystem = require("fs");

        // We search options provided by the developer
        var options = this.options();

        var destPath = options.destPath;
        var basePath = options.basePath;

        if (!destPath || destPath == "") {
            grunt.fatal("Destination path undefined or empty");
            return;
        } else if (!basePath || basePath == "") {
            grunt.fatal("Base path undefined or empty");
            return;
        }

        // We create the destination directory if not exist
        CreateDestDirIfNotExist(destPath);
        var VMfiles = GetAllFilesFromFolder(basePath);

        if (VMfiles.length == 0) {
            grunt.warn("No file found at " + basePath);
        }

        // For each C# viewmodel files
        VMfiles.forEach(function (file) {
            // We build the file name and the path
            var fileName = file.substr(file.lastIndexOf('/') + 1);
            fileName = fileName.replace("cs", "ts");

            var fileNameDest = destPath + "/" + fileName;

            // We get metadatas from the C# classe
            var classMetadata = GetClassMetadata(file);
            // We generate the class
            var content = GenerateClass(classMetadata);

            //We write the content into the new Typescript file
            grunt.file.write(fileNameDest, content);

            grunt.log.writeln("Generated file : " + fileNameDest);
        });

        
        /*
            Functions
        */

        /*
            This method scans the C# file and store all informations we need, like class name, properties metadata ...
        */
        function GetClassMetadata(file: string): Array<ClassMetadata> {
            // Initialisation of all regex we need
            var regexp = new RegExp('([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z0-9]+) { get; set; }');
            var regexpList = new RegExp('([a-zA-Z]+) List<([a-zA-Z]+)> ([a-zA-Z0-9]+) { get; set; }');
            var regexpClass = new RegExp('class ([a-zA-Z0-9]+)');

            // We read de C# class
            var content = grunt.file.read(file);
            var classMetadata: ClassMetadata;
            var arrayClass = new Array<ClassMetadata>();

            // Private variable for detecting class ending
            var bracketLevel = 0;
            var canDetectClass = false;

            // Line by line
            var lines = content.split('\n');
            for (var line = 0; line < lines.length; line++) {
                var item = lines[line].trim();

                // Skip comments
                if (item.startsWith("//") || item.startsWith("/*"))
                    continue;

                // Class declaration
                if (regexpClass.test(item)) {
                    classMetadata = new ClassMetadata(regexpClass.exec(item)[1]);
                    canDetectClass = true;
                    continue;
                }

                var isCollection = false;
                var results: RegExpExecArray = null;

                // Simple property
                if (regexp.test(item)) {
                    results = regexp.exec(item);
                } else if (regexpList.test(item)) { // List property
                    results = regexpList.exec(item);
                    isCollection = true;
                }

                // We store the PropertyMetadata object 
                if (results != null) {
                    classMetadata.Properties.push(new PropertyMetadata(results[1], isCollection, results[2], results[3]));
                } else if (canDetectClass && item == "{") { // We test if we meet a bracket
                    bracketLevel++;
                } else if (canDetectClass && item == "}") { // If we meet an ending-bracket, maybe it's the end of the class
                    bracketLevel--;

                    if (bracketLevel == 0) { // End of class
                        arrayClass.push(classMetadata);
                        canDetectClass = false;
                    }
                }
            }

            return arrayClass;
        }

        /*
            Generate the line in the constructor to initialize the property
        */
        function GeneratePropertyInitializer(propertyMetadata: PropertyMetadata): string {
            return (
                propertyMetadata.IsCollection ?
                    "this." + propertyMetadata.PropertyName + " = ko.observableArray([]);" :
                    "this." + propertyMetadata.PropertyName + " = ko.observable(" + propertyMetadata.DefaultParameter + ");"
                ) + "\r\n";
        }

        /*
            Generate the declaration of the property
        */
        function GenerateProperty(propertyMetadata: PropertyMetadata): string {
            return (
                propertyMetadata.IsCollection ?
                    propertyMetadata.AccessLevel + " " + propertyMetadata.PropertyName + ": KnockoutObservableArray<" + propertyMetadata.PropertyTypeTS + ">" :
                    propertyMetadata.AccessLevel + " " + propertyMetadata.PropertyName + ": KnockoutObservable<" + propertyMetadata.PropertyTypeTS + ">"
                ) + ";\r\n";
        }

        /*
            Generate content of the Typescript class
        */
        function GenerateClass(arrayClass: Array<ClassMetadata>): string {
            var builder: string = "/// <reference path=\"knockout.d.ts\"/>\r\n";

            arrayClass.forEach(function (classMetadata) {

                builder += "class " + classMetadata.ClassName + "\r\n";
                builder += "{\r\n";

                classMetadata.Properties.forEach(function (property) {
                    builder += "    " + GenerateProperty(property);
                });

                builder += "\r\n";
                builder += "    constructor(){\r\n"

                classMetadata.Properties.forEach(function (property) {
                    builder += "        " + GeneratePropertyInitializer(property);
                });

                builder += "    }\r\n";

                builder += "}\r\n";
                builder += "\r\n";
            });

            return builder;
        }

        /*
            Create the destination directory if not exist
        */
        function CreateDestDirIfNotExist(dest: string): void {
            if (!filesystem.existsSync(dest)) {
                filesystem.mkdirSync(dest);
            }
        }

        /*
            Retrieve all files which are in the source directory
        */
        function GetAllFilesFromFolder(directory: string): Array<string> {
            var results: Array<string> = [];

            filesystem.readdirSync(directory).forEach(function (file) {

                file = directory + '/' + file;
                var stat = filesystem.statSync(file);

                if (stat && stat.isDirectory()) {
                    results = results.concat(GetAllFilesFromFolder(file))
                } else results.push(file);

            });

            return results;
        }
    });
}

module.exports = startup;

/*
    Typescript classes
*/

interface String {
    startsWith(str: string): boolean;
}

class ClassMetadata {
    public ClassName: string;
    public Properties: Array<PropertyMetadata>;

    constructor(className: string) {
        this.ClassName = className;
        this.Properties = new Array<PropertyMetadata>();
    }
}

class PropertyMetadata {
    public AccessLevel: string;
    public IsCollection: boolean;
    public IsTypeObject: boolean;
    public PropertyType: string;
    public PropertyName: string

    public PropertyTypeTS: string;
    public DefaultParameter: string;

    constructor(accessLevel: string, isCollection: boolean, propertyType: string, propertyName: string) {
        this.AccessLevel = accessLevel;
        this.IsCollection = isCollection;
        this.PropertyType = propertyType;
        this.PropertyName = propertyName;
        this.IsTypeObject = false;

        this.DetermineTSType();
        this.DetermineDefaultParameter();
    }

    /*
        Determine the Typescript type according to the C# type
    */
    private DetermineTSType(): void {
        switch (this.PropertyType) {
            case "string":
                this.PropertyTypeTS = "string";
                break;
            case "bool":
                this.PropertyTypeTS = "boolean";
                break;
            case "int":
            case "double":
            case "decimal":
            case "float":
                this.PropertyTypeTS = "number";
                break;
            case "DateTime":
                this.PropertyTypeTS = "Date";
                this.IsTypeObject = true;
                break;
            default:
                this.PropertyTypeTS = this.PropertyType;
                this.IsTypeObject = true;
        }
    }

    /*
        Determine the default parameter in the constructor
    */
    private DetermineDefaultParameter(): void {
        this.DefaultParameter = "\"\"";

        if (this.IsTypeObject)
            this.DefaultParameter = "new " + this.PropertyTypeTS + "()";
        if (this.PropertyTypeTS == "boolean")
            this.DefaultParameter = "false";
        if (this.PropertyTypeTS == "number")
            this.DefaultParameter = "0";
    }

    public toString() {
        return this.PropertyName;
    }
}