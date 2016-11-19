'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
module.exports = yeoman.Base.extend({
  initializing: function () {
    this.pkg = require('../../package.json');
    this.log(yosay('Welcome to the zetadelic ' + chalk.red('BaseBackbone v' + this.pkg.version) + ' generator!'));
  },

  /*prompting: function () {
   return this.prompt([{
   type: 'list',
   name: 'css',
   message: 'Would you like use Sass or Less?',
   choices: ['Sass', 'Less']
   }, {
   type: 'list',
   name: 'bootstrap',
   message: 'Which version of Bootstrap?',
   choices: ['3', '4']

   }]).then(function (answers) {
   this.jquery = answers.jquery;
   this.css = answers.css;
   this.bootstrap = answers.bootstrap;
   }.bind(this));
   },*/

  writing: function () {
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
    this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath('bower.json'), this.destinationPath('bower.json'));
    this.fs.copy(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'));
    this.fs.copy(this.templatePath('grunt'), this.destinationPath('grunt'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
  }
  ,
  install: function () {

    /*if (this.bootstrap == 4) {
     fs.readFile(this.destinationPath('bower.json'), 'utf8', function (err, data) {
     if (err) {
     return console.log(err);
     }
     var result = data.replace(/~3.3.7/g, '4.0.0-alpha.5');
     fs.writeFile(this.destinationPath('bower.json'), result, 'utf8', function (err) {
     if (err) {
     return console.log(err)
     }
     });
     }.bind(this));
     }*/

    this.installDependencies();
  }
});
