
export { useStore }

import { create } from 'zustand'


interface Store {
    
    setPreview : ( isPreview : boolean ) => void
    
    isPreview : boolean
}


const useStore = create<Store>()((set) => ({

    isPreview : false ,

    setPreview : ( isPreview ) => set({ isPreview })
}))