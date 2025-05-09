
export { Panels }

import { useEffect , useState } from 'react'
import { SettingsPanel } from './SettingsPanel'
import { GeneralPanel } from './GeneralPanel'
import { useStore } from './Store'


const Pages = [ 'Extensions' , 'Settings' ] as const

type PageType = ( typeof Pages )[ number ]


function Panels (){

    const { setPreview } = useStore()

    useEffect(() => {

        const port = chrome.runtime.connect({
            name : 'Sidepanel Channel'
        })
    
        console.debug('Port',port)
    
        port.onMessage.addListener( async (
            message , port
        ) => {
            console.debug('OnMessage',{ message , port })

            setPreview(message.content.IsPreview)
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
