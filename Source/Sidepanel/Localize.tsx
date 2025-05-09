
export { local }


const { i18n } = chrome


function local (
    key : string ,
    inserts ?: Array<string> | string
){

    const message = key
        .replaceAll('.','_')

    return i18n.getMessage(message,inserts)
}
