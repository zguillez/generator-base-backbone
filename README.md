# generator-base-backbone

[![Build Status](https://secure.travis-ci.org/zguillez/generator-base-backbone.png?branch=master)](https://travis-ci.org/zguillez/generator-base-backbone) [![Code Climate](https://codeclimate.com/github/zguillez/generator-base-backbone/badges/gpa.svg)](https://codeclimate.com/github/zguillez/generator-base-backbone)

> [Zguillez](https://zguillez.io) | Guillermo de la Iglesia

### Yeoman generator for Backbone.js webapp development. With RequireJS, Bootstrap, Sass, and templating with Jade and Lodash

![](http://zguillez.github.io/img/backbone.png)

## Getting Started

### Install Yeoman

	npm install -g yo

### Yeoman Generators

To install generator-base-backbone from npm, run:

	npm install -g generator-base-backbone

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

### NodeJS

* [https://nodejs.org/](https://nodejs.org/)

For update npm

	sudo npm install npm -g

### Bower

	npm install -g bower

### Sass

	sudo gem install sass

## Usage

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

Sass files (*.sass, *.scss) must be located on **/src/styles** folder root.

* Grunt task **sass.js** will process the files into CSS files to folder **/src/styles/css**.
* Grunt task **copy.js** will copy all CSS files into **/src/styles/css** to folder **/dist/css** for ditribution.
* You can also create and edit CSS files in **/src/styles/css**.

### Templating

The NodeJS template engine JADE is implemented. Jade files (*.jade) must be located on **/templates** folder root.

* Grunt task **jade** will process the files into HTML files to folder **/templates/html**.
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




