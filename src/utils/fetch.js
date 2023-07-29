const API_KEY = "bda53789-d59e-46cd-9bc4-2936630fde39";
const API_URL = "https://api.thecatapi.com/v1/";


export default async function fetchApi (urlParams){
    try{
        const response =await fetch(`${API_URL}${urlParams}?api_key=${API_KEY}`);
        const data = await response.json();

        return (data);
    }catch(error){
        return (error);
    }
}