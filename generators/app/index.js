'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var replace = require('replace');


// var _ = require('underscore'),
//     fs = require('fs'),
//     data = JSON.parse(fs.readFileSync('./data.json', 'utf-8')).data;

// _.each(data, function(item) {

//   var newJson = item[0],
//       files = item[1];

//   _.each(files, function(file) {
//     var path = '.' + file,
//         oldJson = JSON.parse(fs.readFileSync(path, 'utf-8')),
//         newJson = _.extend(oldJson, newJson),
//         printableJson = JSON.stringify(newJson, null, 2);

//     fs.writeFile(path, printableJson, function(err) {
//       if (err) throw('File save error: '+ err);
//       console.log('file saved');
//     });

//   });

// });
module.exports = yeoman.Base.extend({

  initializing: function () {
    this.pkg = require('../../package.json');
    this.log(yosay('Welcome to the zetadelic ' + chalk.red('BaseBackbone v' + this.pkg.version) + ' generator!'));
  },

  prompting: function () {
    var prompts = [{
      type: 'list',
      name: 'css',
      message: 'Would you like use Sass or Less?',
      choices: ['SASS', 'LESS']
    }, {
      type: 'list',
      name: 'bootstrap',
      message: 'Which version of Bootstrap do you prefer?',
      choices: ['3', '4']
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.<name>;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
    this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));

    // Files that differs depending on user choices
    this.fs.copyTpl(this.templatePath('bower.json'), this.destinationPath('bower.json'),{
      pkgver:( this.props.bootstrap == '3' ? "3.3.7" : "4.0.0"),
    });

    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'),{
      css:( this.props.css == 'LESS' ? "grunt-contrib-less" : "grunt-contrib-sass"),
      pkgver:( this.props.css == 'LESS' ? "~1.4.0" : "^1.0.0"),
    });

    this.fs.copyTpl(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'),{
      css:this.props.css.toLowerCase()
    });

    // icosa:
    // src files are using a syntax that contains a keyword collision with copyTpl, namely this <%= =>
    //  - copy duplicated files and then delete the unwanted one,
    //  - read and rewrite the target file
    // are workarounds that i came up with to make things work for the meantime
    this.fs.copy(this.templatePath('grunt'), this.destinationPath('grunt'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    this.fs.delete(this.destinationPath('styles/main.'+( this.props.css == 'LESS' ? "sass" : "less")));
    this.fs.delete(this.destinationPath('grunt/'+( this.props.css == 'LESS' ? "sass" : "less") + '.js'));

    var libData = this.fs.readJSON(this.destinationPath('src/data/data.json'));
    var i = 0;
    for (i; i<libData.length; i++){
      if(this.props.bootstrap == '4' && libData[i].name == 'Bootstrap'){
        libData[i].name = 'Bootstrap v4';
        libData[i].url = 'https://v4-alpha.getbootstrap.com/';
      }else if(this.props.css == 'LESS' && libData[i].name ==  'Sass'){
        libData[i].name = 'Less';
        libData[i].url = 'http://lesscss.org/';
      }
    }
    this.fs.writeJSON(this.destinationPath('src/data/data.json'), libData);
  }
  ,
  install: function () {
    this.installDependencies();
  }
});
