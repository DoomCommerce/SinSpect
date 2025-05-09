
export { hookApp }

import { QueryProvider } from './Query'
import { createRoot } from 'react-dom/client'
import { Panels } from './Panels'


function Root (){
    return (
        <QueryProvider>
            <Panels />
        </QueryProvider>
    )
}


function hookApp (){

    const node = document
        .querySelector('main')!

    const root = createRoot(node)

    root.render( <Root /> )
}
