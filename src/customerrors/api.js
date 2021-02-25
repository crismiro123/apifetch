import {resolve} from './resolveresponse.js'
export async function api (url, options){
    try {
        const response=await fetch(url, options)
        return await resolve(response)
    } catch (err) {
      throw err  
    }
}