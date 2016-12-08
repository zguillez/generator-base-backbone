'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-base-backbone:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({css: 'Sass'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'Gruntfile.js'
    ]);
  });
});
