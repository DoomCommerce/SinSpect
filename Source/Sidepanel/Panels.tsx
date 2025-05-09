
export { Panels }

import { useEffect , useState } from 'react'
import { SettingsPanel } from './SettingsPanel'
import { GeneralPanel } from './GeneralPanel'
import { useStore } from './Store'


const Pages = [ 'Extensions' , 'Settings' ] as const

type PageType = ( typeof Pages )[ number ]


function Panels (){

    const { setPreview , setTheme } = useStore()

    useEffect(() => {

        const port = chrome.runtime.connect({
            name : 'Sidepanel Channel'
        })
    
        console.debug('Sidepanel::Port',port)
    
        port.onMessage.addListener( async (
            message , port
        ) => {

            console.debug('Sidepanel::onMessage',{ message , port })

            if( 'IsPreview' in message.content )
                setPreview(message.content.IsPreview)

            if( 'Theme' in message.content )
                setTheme({ name : message.content.Theme.Name })
        })

    },[])

    const [ page , setPage ] = useState<PageType>('Extensions')

    const navigation = Pages.map(( page ) => {
        return (
            <div
                children = { page }
                onClick = { () => setPage(page) }
                key = { page }
            />
        )
    })

    return (
        <div className = 'Panels' >

            <nav children = { navigation } />

            <Panel page = { page } />

        </div>
    )
}


function Panel (
    { page } : { page : PageType }
){

    if( page === 'Extensions' )
        return <GeneralPanel />

    if( page === 'Settings' )
        return <SettingsPanel />
}
