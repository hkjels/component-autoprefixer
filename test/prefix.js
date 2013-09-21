
/**
 * Test dependencies.
 */

var Builder = require('component-builder')
  , autoprefix = require('../');

describe('Auto prefix', function() {

  it ('should add vendor prefixes to css properties', function(done) {
    var builder = new Builder(__dirname + '/support/prefix');

    builder.use(autoprefix);

    builder.build(function(err, res) {
      res.css.should.include('webkit');
      done();
    });
  });

});

