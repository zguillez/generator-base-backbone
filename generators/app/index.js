'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();
    this.log(yosay('Welcome to the funkadelic ' + chalk.red('BaseBackbone v1.0.0') + ' generator!'));
    var prompts = [];
    this.prompt(prompts, function(props) {
      this.props = props;
      done();
    }.bind(this));
  },
  writing: {
    app: function() {
      this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
      this.fs.copy(this.templatePath('bower.json'), this.destinationPath('bower.json'));
      this.fs.copy(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'));
      this.fs.copy(this.templatePath('grunt'), this.destinationPath('grunt'));
      this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    },
    projectfiles: function() {
      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
      this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
    }
  },
  install: function() {
    this.installDependencies();
  }
});