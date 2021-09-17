import { GET_ITEMS } from './types';

const clientID = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const getItems = () => {
    return dispatch => {
        fetch(`https://api.unsplash.com/photos/?client_id=${clientID}&per_page=30`)
        .then(res => res.json()).then(json => dispatch({
            type: GET_ITEMS,
            payload: json
          }))
        .catch(error => error)
    }
}

