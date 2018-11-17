# BootCamp GoReact Rocketseat

### Fix npm run build

In the third lesson of the first module **Environments and Concepts**, the **.babelrc** file is written as follows:

```javascript
{
    "presets": ["env", "react"]
}
```

Due to the use of the most up-to-date dependencies, a modification of the **.babelrc** file was made as follows:

```javascript
{
    "presets": ["@babel/env", "@babel/preset-react"]
}
```

#####Note: This happened due to the use of the most current dependencies. You may need to install some dependencies, the ones I needed to install were these:

`$ npm install -D @babel/preset-react @babel/preset-env @babel-core`

This is the final version of the **package.json** file after all the updated dependencies:

```javascript
{
  "name": "first-application",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  },
  "devDependencies": {
    "@babel/core": "^7.1.6",
    "@babel/preset-env": "^7.1.6",
    "@babel/preset-react": "^7.0.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2"
  }
}
```
Source for problem resolution: https://github.com/babel/babel/issues/6808#issuecomment-343792786
