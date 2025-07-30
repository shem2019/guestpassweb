/**
 * PostCSS configuration for Create React App
 *
 * Create React App (CRA) will automatically discover `postcss.config.js` at
 * the project root. By defining this file we ensure that Tailwind’s
 * directives (e.g. `@tailwind` and `@apply`) are transformed by PostCSS
 * during development and production builds.  CRA does not recognize
 * `postcss.config.cjs` when using ECMAScript modules, so we duplicate
 * the configuration here.  Any changes to this file should also be
 * mirrored in `postcss.config.cjs` if you wish to maintain that file for
 * other tooling.
 */
module.exports = {
  // Only run autoprefixer.  Tailwind is compiled ahead-of-time via the
  // `build:css` script, so it does not need to run through PostCSS again.
  plugins: {
    autoprefixer: {},
  },
};