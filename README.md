Just another personal webpage

## Contributing
- `npm install -D` to init local environment
- `npm run start` to startup localhost
- `npm run build` to build, inpsect entry point dist/index.html
-- NOTE: opening html file in browser does not work; the lack of server to call back to causes issues.
- `npm run test` to run unit tests

- On master push, the src files are compiled into a production ready distribution and uploaded to an S3 bucket set up to host a static website at `wes-develop.com`

- To run specific tests, run `npm install jest --global` and then `jest -t 'REGEX` to run tests matching said regex

### Caching
There are two layers of caching going on: CDN caching and browser caching.
- Going incognito will start a browser off without any caches
- http://d2yqfpfx73rb4f.cloudfront.net to request from the CDN entrypoint (skip DNS routing)
- http://wes-develop.com.s3-website-us-west-2.amazonaws.com/ to request the root `index.html` directly from the S3 bucket (skip CDN and DNS routing).

### Magic to be aware of
- Theres a bit of import path aliasing going on in .bablrc under the module-resolver plugin. Aliasing the top most folders allows us to write `import common/Headline.js` instead of `import ../../../../common/Headline.js`.

### TODO WESD
- get sidepage loaded on url w/different path
-- block indexing via https://developers.google.com/search/docs/crawling-indexing/block-indexing
-- need to upload to new S3 bucket? upload to same, add new route directly to a new index file entry point?
