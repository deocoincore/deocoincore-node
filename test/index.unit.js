'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export deocoincore-lib', function() {
    var deocoincore = require('../');
    should.exist(deocoincore.lib);
    should.exist(deocoincore.lib.Transaction);
    should.exist(deocoincore.lib.Block);
  });
});
