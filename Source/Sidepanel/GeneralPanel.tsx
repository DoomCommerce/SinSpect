
export { GeneralPanel }

import { ThemeInfo } from './ThemeInfo'
import { useStore } from './Store'


function GeneralPanel (){

    const { isPreview } = useStore()

    return (
        <div>

            <p> Is Preview : { String(isPreview) }</p>

            <ThemeInfo />

        </div>
    )
}
