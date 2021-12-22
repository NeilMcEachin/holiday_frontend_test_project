# 24G Vue Template

![Version](https://img.shields.io/badge/Version-2.0.4-yellow)

| Env | FE URL | API URL | Assets URL |
|-----|--------|---------|------------|
| Dev | [<dev frontend url>](<dev frontend url>) | [<dev api url>](<dev api url>) | [<dev asset url url>](<dev frontend url>) |
| QA | [<qa frontend url>](<qa frontend url>) | [<qa api url>](<qa api url>) | [<qa asset url url>](<qa frontend url>) |
| Prod | [<prod frontend url>](<prod frontend url>) | [<prod api url>](<prod api url>) | [<prod asset url url>](<prod frontend url>) |

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiling and building

This template is set up to compile and build for three environments:

- Dev: `npm run build-dev`
- QA: `npm run build-qa`
- Production: `npm run build`

All builds run in [Vue's modern mode](https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode).

### Lints and fixes files

When using VS Code, this template is set up to automatically lint and format on save using both `eslint` and `prettier`. The following command will allow you to lint and format all files:

```
npm run lint
```

## Customize

### App Title

The title of the app can be set in `vue.config.js`

```json
pages: {
  index: {
    title: 'Vue Template',
  }
}
```

###

See [Vue Configuration Reference](https://cli.vuejs.org/config/).

## Environments

- Prod: https://example.com
- QA: https://qa.example.com
- Dev: https://dev.example.com

## Browsers Supported

Latest unless stated otherwise

- Edge
- Safari
- Firefox
- Chrome (+/-1)

## Read More

[Componenents](src/components/README.md)
