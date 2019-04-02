Just another personal webpage

## Contributing
- `npm install -D` to init local environment
- `npm run build` to build, then open up dist/index.html in a web browser
- `npm run test` to run unit tests

- On master push, the src files are compiled into a production ready distribution and uploaded to an S3 bucket set up to host a static website at `wes-develop.com`

### Caching
There are two layers of caching going on: CDN caching and browser caching.
- Going incognito will start a browser off without any caches
- http://d2yqfpfx73rb4f.cloudfront.net to request from the CDN entrypoint (skip DNS routing)
- http://wes-develop.com.s3-website-us-west-2.amazonaws.com/ to request the root `index.html` directly from the S3 bucket (skip CDN and DNS routing).

### Magic to be aware of
- Theres a bit of import path aliasing going on in .bablrc under the module-resolver plugin. Aliasing the top most folders allows us to write `import common/Headline.js` instead of `import ../../../../common/Headline.js`.
