
import type { ThemeGlobalShopify } from '../Shopify/Theme'

console.debug('Content-Shared')


waitForShopify().then(( result ) => {

    let theme = null

    if( result )
        theme = {
            name : result.theme.schema_name
        }

        
    console.debug('Shopify',result,theme)
    window.postMessage(theme,'*')
})


function waitForShopify (){
    return new Promise< null | ThemeGlobalShopify  >(( resolve ) => {

        let interval = -1 ,
            timeout = -1

        timeout = setTimeout(() => {
            
            clearInterval(interval)
            
            resolve(null)

        },2000)

        interval = setInterval(() => {
            
            const shopify = ( window as any ).Shopify as ThemeGlobalShopify
            
            if( shopify ){

                clearInterval(interval)
                clearTimeout(timeout)
                
                resolve(shopify)

                return
            }

        },100)
    })
}
