


window.addEventListener('message',( event ) => {

    const { source , data } = event

    if( source !== window )
        return

    console.debug('Content-Isolated::onMessage',{ event , data })


    chrome.runtime.sendMessage({
        type : 'Theme Data' ,
        data
    })
})



chrome.runtime.onMessage.addListener(( 
    message , sender , reply
) => {
    console.debug('Content-Isolated::onMessage',{ message , sender })
})