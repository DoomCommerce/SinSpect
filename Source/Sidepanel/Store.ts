
export { useStore }

import { create } from 'zustand'


interface Theme {
    name : string
}


interface Store {
    
    setPreview : ( isPreview : boolean ) => void
    setTheme : ( theme : Theme ) => void
    

    isPreview : boolean
    theme : null | Theme
}


const useStore = create<Store>()((set) => ({

    isPreview : false ,
    theme : null ,

    setPreview : ( isPreview ) => set({ isPreview }) ,
    setTheme : ( theme ) => set({ theme })
}))