
declare global {
    var cookieStore : CookieStore
}


interface CookieStore {
    
	get ( 
        name : string 
    ) : Promise<Cookie | null>
	
    get ( 
        options : {
            name : string
            url ?: string 
        }
    ) : Promise<Cookie | null>

	getAll () : Promise<Cookie[]>

	getAll ( 
        name : string 
    ) : Promise<Cookie[]>
	
    getAll ( 
        options : { 
            name ?: string
            url ?: string 
        }
    ) : Promise<Cookie[]>

	set (
        name : string , 
        value : string
    ) : Promise<void>
	
    set(
		options : Partial<Cookie> & { 
            value : string 
            name : string
        }
	) : Promise<void>

	delete ( 
        options : { 
            name : string
            url ?: string 
        }
    ) : Promise<void>
	
    delete ( 
        name : string 
    ) : Promise<void>

	addEventListener (
		eventName: 'change' ,
		handler : CookieChangedHandler
	) : void

	removeEventListener (
		eventName : 'change' ,
		handler : CookieChangedHandler
	) : void

	onchange : null | CookieChangedHandler
}


type CookieChangedHandler = 
    ( event : CookieChangedEvent ) => void


interface CookieChangedEvent 
extends Event {
	changed : Readonly<Array<Cookie>>
	deleted : Readonly<Array<Cookie>>
}


interface Cookie {
    partitioned : boolean
	sameSite : SameSite
	expires : number
	secure : boolean
	domain : string
	value : string
	name : string
	path : string
}


type SameSite = 
    | 'Strict'
    | 'None'
    | 'Lax'



