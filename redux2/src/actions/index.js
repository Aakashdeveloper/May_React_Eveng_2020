const url = "http://localhost:8900";

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}