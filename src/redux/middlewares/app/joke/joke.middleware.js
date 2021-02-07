import { setError, setLoader } from '../../../actions/app/ui/ui.actions';
import { FETCH_JOKE, setJoke } from '../../../actions/app/joke/joke.actions';
import { apiRequest, API_ERROR, API_SUCCESS } from '../../../actions/core/api/api.actions';

export const jokeMiddleware = () => next => action => {
    next(action)

    switch(action.type){
        case FETCH_JOKE:
            const { url } = action.payload;

            next([
                apiRequest({ method: 'GET', url, entity: FETCH_JOKE }),
                setLoader({ state: true, entity: FETCH_JOKE })
            ]);
            break;
        
        case `${FETCH_JOKE} ${API_SUCCESS}`:
            next([
                setJoke({ data: action.payload.data[0] }),
                setLoader({ state: false, entity: FETCH_JOKE }),
                setError({ state: false, entity: FETCH_JOKE })
            ]);
            break;
        
        case `${FETCH_JOKE} ${API_ERROR}`:
            next([
                setLoader({ state: false, entity: FETCH_JOKE }),
                setError({ state: true, entity: FETCH_JOKE })
            ]);
            break;
    }
}