function constructEndPoint(source,method){
    const url=source+method
    return url
}
function post(source,method,request){
    return fetch(constructEndPoint(source,method),{
        method:"POST",
        mode: "cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(request) 

    }).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            return { isError: true, error: response.message };
        }
    })
}
function get(source,method,request){
    return fetch(constructEndPoint(source,method),{
        method:"GET",
        mode: "cors",
        headers:{"Content-Type":"application/json"},
    }).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            return { isError: true, error: response.message };
        }
    })
}


export default {
    post,get
}