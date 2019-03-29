Just another personal webpage

## Contributing

- `npm install -D` to init local environment
- `npm run build` to build, then open up dist/index.html in a web browser
- `npm run test` to run unit tests

- On master push, the src files are compiled into a production ready distribution and uploaded to an S3 bucket set up to host a static website at `wes-develop.com`

### Style
- Theres a bit of import path aliasing going on in .bablrc under the module-resolver plugin. Aliasing the top most folders allows us to write `import common/Headline.js` instead of `import ../../../../common/Headline.js`.
