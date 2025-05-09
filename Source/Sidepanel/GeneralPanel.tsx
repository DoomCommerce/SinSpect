
export { GeneralPanel }

import { useStore } from './Store'


function GeneralPanel (){

    const { isPreview } = useStore()

    return (
        <div>

            <p> Is Preview : { String(isPreview) }</p>

        </div>
    )
}
