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

    // Files that differs depending on css choice
    this.fs.copy(this.templatePath('bower_bsv'+this.props.bootstrap+'.json'), this.destinationPath('bower.json'));


    // Files that differs depending on css choice
    this.fs.copy(this.templatePath('package_'+this.props.css+'.json'), this.destinationPath('package.json'));
    this.fs.copyTpl(this.templatePath('Gruntfile.js'), this.destinationPath('Gruntfile.js'),{css:this.props.css.toLowerCase()});

    this.fs.copy(this.templatePath('grunt'), this.destinationPath('grunt'));
    this.fs.unlink

    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
  }
  ,
  install: function () {
    this.installDependencies();
  }
});
