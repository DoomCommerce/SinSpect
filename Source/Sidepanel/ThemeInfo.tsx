
export { ThemeInfo }

import { useStore } from './Store'


function ThemeInfo (){

    const { theme } = useStore()

    if( ! theme )
        return 

    return (
        <div>

            Theme : { theme.name }

        </div>
    )
}
