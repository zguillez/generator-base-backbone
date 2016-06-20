# generator-base-backbone

[![npm version](https://badge.fury.io/js/generator-base-backbone.svg)](https://badge.fury.io/js/generator-base-backbone)
[![Build Status](http://img.shields.io/travis/zguillez/generator-base-backbone.svg)](https://travis-ci.org/zguillez/generator-base-backbone)
[![Code Climate](http://img.shields.io/codeclimate/github/zguillez/generator-base-backbone.svg)](https://codeclimate.com/github/zguillez/generator-base-backbone)
[![Dependency Status](https://gemnasium.com/zguillez/generator-base-backbone.svg)](https://gemnasium.com/zguillez/generator-base-backbone)
[![Installs](https://img.shields.io/npm/dt/generator-base-backbone.svg)](https://coveralls.io/r/zguillez/generator-base-backbone)
![](https://reposs.herokuapp.com/?path=zguillez/generator-base-backbone)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
[![Join the chat at https://gitter.im/zguillez/generator-base-backbone](https://badges.gitter.im/zguillez/generator-base-backbone.svg)](https://gitter.im/zguillez/generator-base-backbone?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

### Yeoman generator for Backbone.js webapp development. With RequireJS, Bootstrap, Sass, and templating with Jade and Lodash

![](http://zguillez.github.io/img/backbone.png)

# Getting Started

### Install Yeoman

	npm install -g yo

### Yeoman Generators

To install generator-base-backbone from npm, run:

	npm install -g generator-base-backbone
	
	//or:
	sudo npm install -g generator-base-backbone

Finally, initiate the generator:

	yo base-backbone

If you have error on install try to update dependences manually:

```bash
sudo npm update
```
```bash
bower update
```

## Requeriments

### [NodeJS](https://nodejs.org/)

For update npm

	sudo npm install npm -g

### [Bower](http://bower.io/)

	npm install -g bower

### [Sass](http://sass-lang.com/)

	sudo gem install sass
	
**Documentation:**

* [https://nodejs.org/](https://nodejs.org/)
* [http://bower.io/](http://bower.io/)
* [http://sass-lang.com/](http://sass-lang.com/)

# Usage

Develop code on folder **/src**

	/src
		/data
		/images
		/scripts
			/collections
			/views
		/styles
		/templates
		
### Compile code

Use grunt task to compile code and deploy webapp

	grunt serve
	
THis will launch server on port 9000

	http://localhost:9000/
	
Distribute code is compileded on forder **/dist**

	/dist
		/css
		/data
		/images
		/js
		/lib
		/templates
		
### Styling

Sass files (\*.sass, \*.scss) must be located on **/src/styles** folder root.

* Grunt task **sass.js** will process the files into CSS files to folder **/src/styles/css**.
* Grunt task **copy.js** will copy all CSS files into **/src/styles/css** to folder **/dist/css** for ditribution.
* You can also create and edit CSS files in **/src/styles/css**.

### Templating

The NodeJS template engine JADE is implemented. Jade files (\*.jade) must be located on **/templates** folder root.

* Grunt task **jade.js** will process the files into HTML files to folder **/templates/html**.
* Grunt task **copy.js** will copy all CSS files into **/templates/html** to folder **/dist/templates** for ditribution.
* You can also create and edit HTML templates files in **/templates/html**.


You can use combined Jade and Lodash for templating:

	//templates/index.jade
	
	header#header
	section(class='content')
	header
		img(class='logo', src='images/backbone.png')
	.buttons.row
		<% _.forEach(libs, function(lib) { %>
		<%=  '<a href="' + lib.url + '" target="_black" data-bypass="data-bypass" class="btn btn-default btn-sm">' + lib.name + '</a>'  %>
		<% }); %>
	footer#footer
	
**Documentation:**

* [http://jade-lang.com/](http://jade-lang.com/)
* [https://lodash.com/](https://lodash.com/)

# Dependencies

Grunt task **copy.js** will read all bower.js files from **/bower_components** subfolders, and copy the file path from **main** node, like:

	//bower_components/requirejs/bower.json
	{
	  ...
	  "main": "require.js",
	  ...
	} 

And put this files into folder **/dist/lib/**.

If any installed dependency has no bower.json file (like lodash) you must edit the **copy.js** task to manually copy it:

	grunt.config.set('copy', {
		...
		lodash_: {
			cwd: 'bower_components/lodash/dist',
			src: 'lodash.js',
			dest: 'dist/lib/',
			expand: true
		},
		...
	});

If an unnecesaary file is copied (like boostrap.less):

	//bower_components/bootstrap/bower.json
	{
	  ...
	  "main": [
    	"less/bootstrap.less",
    	"dist/js/bootstrap.js"
	  ],
	  ...
	} 
	
you can delete it with the **clean-dist.js** task:

	//grunt/clean-dist.js
	grunt.registerTask('clean-dist', 'Clean dist folder', function() {
		...
		grunt.config.set('clean.files.src', ['dist/lib/bootstrap.less']);
		...
	});

# Contributing and issues

Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue or send me an [email](mailto:mail@zguillez.io).

# License

©2016 Zguillez.io

Original code licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License) Open Source projects used within this project retain their original licenses.

# Changelog
### v1.5.0 (June 20, 2016)
- Update dependencies
- Uses Bootstrap Native
- Uses Jquery 3

### v1.4.0 (May 9, 2016)
- Update dependencies

### v1.3.0 (February 7, 2016)
- Fix Backbone require on collections

### v1.2.0 (January 29, 2016)
- Auto copy dependecies fron bower.json file

### v1.1.10 (January 12, 2016)
- Fix yo install version

### v1.0.0 (October 20, 2015) 
Initial Backbone.js skeleton

Features:

* Bootstrap
* Jquery
* Sass
* Lodash
* Jade templating
* JSHint code chech
* Grunt tasks

[![Analytics](https://ga-beacon.appspot.com/UA-1125217-30/zguillez/generator-base-backbone?pixel)](https://github.com/igrigorik/ga-beacon)


