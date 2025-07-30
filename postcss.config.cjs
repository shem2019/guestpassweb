// postcss.config.cjs – minimal Tailwind v4 setup for CRA
/**
 * PostCSS configuration
 *
 * We configure PostCSS to run Tailwind and Autoprefixer.  The previous
 * configuration attempted to reference the `@tailwindcss/postcss` package
 * which is not installed in this project.  As a result, Tailwind’s
 * directives (such as `@tailwind` and `@apply`) were never processed,
 * leaving the raw directives in the compiled CSS.  Using the built-in
 * `tailwindcss` and `autoprefixer` plugins ensures Tailwind classes and
 * utilities are properly generated.
 */
module.exports = {
  // Only run autoprefixer.  Tailwind is compiled ahead-of-time via the
  // `build:css` script, so it does not need to run through PostCSS again.
  plugins: {
    autoprefixer: {},
  },
};
