
/**
 * Module dependencies.
 */

var autoprefixer = require('autoprefixer')
  , fs = require('fs');

/**
 * Expose hook `before styles`.
 */

module.exports = function(builder) {
  builder.hook('before styles', addPrefixes);
};

/**
 * Add vendor prefixes.
 */

function addPrefixes(pkg, cb) {
  if (!pkg.config.styles) return cb();
  var files = pkg.config.styles.filter(onlyCss);

  files.forEach(function(file) {
    var css = fs.readFileSync(pkg.path(file), 'utf-8');
    css = autoprefixer.compile(css)
    pkg.addFile('styles', file, css);
  });

  process.nextTick(cb);
}

/**
 * Only css-files.
 */

function onlyCss(filename) {
  return filename.match(/.css$/);
}

