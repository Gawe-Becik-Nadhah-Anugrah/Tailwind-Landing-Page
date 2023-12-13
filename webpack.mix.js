let mix = require('laravel-mix');
mix.js('src/source.js', 'dist/script.js');
mix.minify('dist/script.js');