
import { Cookies } from 'Source/Shopify/Cookies'


chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick : true
    })
})


let sidepanel_port : null | chrome.runtime.Port = null


chrome.runtime.onConnect.addListener( async (
    port
) => {
    
    console.debug('Chrome:Runtime:OnConnect',{ port })

    if( port.name != 'Sidepanel Channel' )
        return

    sidepanel_port = port

    port.onDisconnect.addListener(() => {
        sidepanel_port = null
    })
})



chrome.runtime.onMessage.addListener( async (
    message , sender
) => {
    console.debug('Chrome:Runtime:OnMessage',{ message , sender})
})


chrome.tabs.onActivated.addListener( async (
    info
) => {
    
    console.debug('Chrome:Tabs:OnActivated',info)

    const tab = await chrome.tabs.get(info.tabId)

    updateIsPreview(tab)
})



chrome.tabs.onUpdated.addListener( async ( 
    tabId , changeInfo , tab
) => {

    console.debug('Chrome:Tabs:OnUpdated',{ tabId , changeInfo })

    if( changeInfo.status === 'loading' )
        if( tab.active )
            updateIsPreview(tab)

})


async function updateIsPreview (
    tab : chrome.tabs.Tab
){


    console.debug('Url',tab.url)

    if( ! tab.url )
        return

    const url = new URL(tab.url)

    console.debug('Protocol',url.protocol)

    if( url.protocol !== 'https:' )
        return

    const cookie = await chrome.cookies.get({
        name : Cookies.Is_Preview_Theme ,
        url : tab.url
    })

    const isPreview = cookie?.value === '1'

    sidepanel_port?.postMessage({
        content : {
            IsPreview : isPreview
        }
    })
}


chrome.runtime.onMessage.addListener((
    message , sender , reply
) => {

    console.debug('onMessage',{ message , sender })

    if( message.type !== 'Theme Data' )
        return


    sidepanel_port?.postMessage({
        content : {
            Theme : {
                Name : message.data.name as string
            }
        }
    })
})
