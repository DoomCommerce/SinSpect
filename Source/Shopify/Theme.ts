
export type { ThemeGlobalShopify }


interface ThemeGlobalShopify {

    shop : string

    locale : string

    currency : {
        active : string
        rate : string
    }

    country : string
    theme : {
        name : string
        id : number
        schema_name : string
        schema_version : string
        theme_store_id : number
        role : string
        handle : string
        style : {
            id : null
            handle : null
        }
    }

    cdnHost : string
    routes : {
        root : string
    }

    ce_forms : {
        q : Array<unknown>
    }

    captcha : {}

    PaymentButton : {
        isStorefrontPortableWallets : boolean
    }

    analytics : {
        replayQueue : Array<unknown>
        initialized : boolean
    }

    moduels : boolean
    featureAssets : {
        'shop-js' : {}
    }
}