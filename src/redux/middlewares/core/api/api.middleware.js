import axios from 'axios';
import { API_REQUEST, apiError, apiSuccess } from '../../../actions/core/api/api.actions';

const apiMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if(action.type.includes(API_REQUEST)){
        const { body, method, url, entity } = action.payload
        
        axios({ method, url, data: body })
            .then(res => {
                dispatch(apiSuccess({ response: res.data, entity }))
            })
            .catch(error => {
                dispatch(apiError({ error, entity }))
            })
        
    }
};

export default apiMiddleware;