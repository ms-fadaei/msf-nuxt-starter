# GLOBAL COMPONENTS

> ⚠ **This directory is not required, you can delete it if you don't want to use it.**

This directory contains the Global Components. These components can be used in other projects and have very general logic and UI styles.

There are some points about components in this directory:
1. their names must start with `Base` prefix (Like BaseButton).
2. They must be independent of the project. All assets (like icons, ...), logic, test, etc must be located in one directory with a relative path.
3. associated files/assets (that mentioned above) must group in a sub directory with the name of component.
4. They must have the general logic and UI styles to be reused in another project without any complexities.
5. they are global components so we don't need to import them inside other components.

**Directory Structure**
```
|--/global
|----/BaseButton
|------BaseButton.vue
|------BaseButton.spec.js
|------BaseButton.stories.js
|------/assets
|--------loading.svg
|----BaseLoading.vue
|----BaseLink.vue
|----...
```
