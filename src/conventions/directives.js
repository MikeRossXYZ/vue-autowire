// Default conventions for autowiring directives
// NOTES:
//  - These conventions rely on a webpack alias of "@" set to the project's root folder
//    It is done by the vue-cli by default, but devs can do so on their own projects
//  - Values here need to be primitives (not variables) since webpack will parse these when included from the end project
//    For that reason is also important to separate conventions into separated files so they can be individually imported if needed

export default {
  directives: {
    // Sync components
    requireContext: require.context(
      // root folder for components
      '@/directives',
      // recursive
      true,
      // include all .js files
      /\/(?:[^.]+|(?!\.local\.js$))\.js$/,
    ),
  }
};
