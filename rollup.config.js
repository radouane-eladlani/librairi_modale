import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.jsx', // Entry point of your library
  output: {
    file: 'dist/bundle.js', // Output bundle
    format: 'cjs', // CommonJS format
  },
  plugins: [
    resolve(), // So Rollup can find node_modules
    commonjs(), // So Rollup can convert commonjs to ES modules
    babel({
      exclude: 'node_modules/**', // Only compile our source code
    }),
    postcss({ // Process and bundle CSS files
      extensions: ['.css'],
      extract: false, // If true, it will create a separate CSS file
      minimize: true, // Minify the CSS
    }),
  ],
  external: ['react', 'react-dom'], // Exclude peer dependencies
};