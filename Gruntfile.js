/// <binding ProjectOpened='watch_ts' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks/src');

    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        typescript: {
            base: {
                src: ['src/*.ts'],
                dest: 'tasks',
                options: {
                    module: 'amd',
                    target: 'es5',
                    keepDirectoryHierarchy: false,
                    declaration: false
                }
            }
        },
        watch: {
            ts: {
                files: ['src/*.ts'],
                tasks: ['compil_src'],
            }
        },
        nodeunit: {
            tests: ['test/test.js']
        },
        clean: {
            tests: ['tmp']
        },
        ts_knockout_generation: {
            case1: {
                options: {
                    basePath: 'test/initial',
                    destPath: 'test/final'
                }
            }
        }
    });

    grunt.registerTask("compil_src", ["typescript"]);
    grunt.registerTask("watch_ts", ["watch:ts"]);
    grunt.registerTask('test', ['clean', 'ts_knockout_generation', 'nodeunit']);
};