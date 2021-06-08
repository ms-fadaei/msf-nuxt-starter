# SHARED COMPONENTS

> ⚠ **This directory is not required, you can delete it if you don't want to use it.**

This directory contains the Shared Components. These components can be used all over in this project and have very specific logic and UI styles that relative to this project.

There are some points about components in this directory:
1. They don't have a specific prefix!
2. They must be relative to the project. All assets (like icons, ...), logic, test, etc must be located in project directories.
3. Just associated component (like sub-component to the component) must group in a sub directory with the name of the component (kebab-case).
4. They are global components so we don't need to import them inside other components.

**Directory Structure**
```
|--/Shared
|----/comment-box
|------CommentBox.vue
|------CommentBoxScore.vue
|----ProfileCard.vue
|----ProductBox.vue
|----...
```
