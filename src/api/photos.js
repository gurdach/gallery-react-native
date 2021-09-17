const API_TOKEN = "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
const BASE_URL = "https://api.unsplash.com/"

function objectToQuery(params) {
    if (params) {
        return Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    } else {
        return ''
    }
}

export async function photos(params) {
    return fetch(`${BASE_URL}/photos/?client_id=${API_TOKEN}&${objectToQuery(params)}`)
        .then(res => res.json())
        .catch(error => error)
}