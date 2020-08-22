# ✨✨ Praise the NHS - Single Page Application. ✨✨ 

PTNHS, rebuild in a headless Vue.js environment to best provide a strong, fast and powerful experience ♥.

## Project setup
```
npm install
```

## Style
### Linting
The project uses Stylelint to lint SCSS on each build. 

Run:
```
stylelint ComponentName.vue --fix
```
To automatically fix linting errors.

### Global SCSS injection
The main entrypoint for global SCSS is `/src/assets/styles/common/_global.scss`.

**Note**: Globals are only injected if the component has internal styling.
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
