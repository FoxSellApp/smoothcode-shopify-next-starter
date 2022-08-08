# SmoothCode Shopify Next Starter

We will be using the following in this starter code for building an Embedded Shopify App:
* SmoothCode
* Next JS (React)
* Shopify App Bridge
* Shopify Polaris

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Start a tunnel for the server
You can use
* ngrok
* localxpose

## Steps to build an embedded Shopify App
* Create an app manually on Shopify Partner Dashboard
* Create an app on SmoothCode
* Copy the `App URL` from SmoothCode to `.env` as `NEXT_PUBLIC_SMOOTHCODE_APP_URL`
* Add the `App URL` in Shopify Partner Dashboard as `https://<tunnel>/auth/app-url`
* Add the `Allowed Redirection URL` from SmoothCode to Shopify Partner Dashboard
* Copy the Shopify API Key & Secret from Shopify and paste it on SmoothCode
* Copy the Shopify API Key to `.env` as `NEXT_PUBLIC_SHOPIFY_API_KEY`
* Navigate to `App Dashboard` and add this URL - `https://<tunnel>/home` (this points to the code in `pages/home.js`)
* Install the app on the test store and see it embedded into Shopify Admin

**Note**: Restart the server after making changes in `.env` file
***
