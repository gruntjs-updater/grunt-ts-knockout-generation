# ts-knockout-generation

> Generate Knockout ViewModels in Typescript from C# ViewModels

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install ts-knockout-generation --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('ts-knockout-generation');
```

## The "ts_knockout_generation" task

### Overview
In your project's Gruntfile, add a section named `ts_knockout_generation` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ts_knockout_generation: {
    your_target: {
      options: {
			basePath: 'path/to/source/files',
			destPath: 'path/to/dest/files'
		}
    },
  },
});
```

You only have to specify the root file of all your C# ViewModels files and folder. The pluging will search recursively inside your directories.

### Options

#### options.basePath
Type: `String`
Default value: `''`

A string value that is used to indicate your C# source files.

#### options.destPath
Type: `String`
Default value: `''`

A string value that is used to do indicate the directory that files will be generated.

### Usage Examples

#### C# ViewModels

Assume we have this C# ViewModel

```csharp
public class EntityItemViewModel
{
	public int Id { get; set; }
	public string Valeur { get; set; }
}
```

And the plugin will generate

```ts
/// <reference path="knockout.d.ts"/>
class EntityItemViewModel
{
    public Id: KnockoutObservable<number>;
    public Valeur: KnockoutObservable<string>;

    constructor(){
        this.Id = ko.observable(0);
        this.Valeur = ko.observable("");
    }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
