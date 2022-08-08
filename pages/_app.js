import {AppProvider} from "@shopify/polaris";
import App from "next/app";
import enTranslations from "@shopify/polaris/locales/en.json"

import '../styles/globals.css'
import '@shopify/polaris/build/esm/styles.css';

function MyApp({Component, pageProps}) {
    return (
        <AppProvider i18n={enTranslations}>
            <Component {...pageProps} />
        </AppProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)

    const ctx = appContext.ctx
    const shop = ctx.query.shop

    ctx.res.setHeader(
        'Content-Security-Policy', `frame-ancestors https://${shop} https://admin.shopify.com/`
    )
    ctx.res.setHeader(
        'X-Frame-Options', 'ALLOWALL'
    )

    return {...appProps}
}


export default MyApp
