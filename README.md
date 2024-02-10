# ZKMF2024 Website

## Deployment

The website is deployed using Netlify.  
[![Netlify Status](https://api.netlify.com/api/v1/badges/1412c281-8ab0-4c9b-b342-9e07777dea07/deploy-status)](https://app.netlify.com/sites/zkmf2024/deploys)

### Build settings

* Build command: `npm run generate`
* Publish directory: `dist`

### Environment variables

* "Add a single variable"
    * `API_BASE`
    * `NUXT_PUBLIC_GTAG_ID`
    * `MAPBOX_API_KEY`

For local development add a `.env` file in root folder looking like this:

```properties
API_BASE=<EITHER LOCALHOST OR TESTSERVER URL>
MAPBOX_API_KEY=<API_KEY>
NUXT_PUBLIC_GTAG_ID=<GTAG_ID>
```

## Prettier

```bash
npx prettier . --write
```
