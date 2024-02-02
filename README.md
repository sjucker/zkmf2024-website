# ZKMF2024 Website

## Deployment

The website is deployed using Netlify.  
[![Netlify Status](https://api.netlify.com/api/v1/badges/b4a684e7-280b-452d-9236-0e15caae99b3/deploy-status)](https://app.netlify.com/sites/zkmf2024-test/deploys)

### Build settings

* Build command: `npm run generate`
* Publish directory: `dist`

### Environment variables

* "Add a single variable"
* `API_BASE` with value pointing to server

## Prettier

```bash
npx prettier . --write
```
