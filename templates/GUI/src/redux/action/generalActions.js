import axios from 'axios';
import { createMessage, returnErrors } from './alertAction';
import * as actionTypes from './types';

export const authStart = () => {
    return {
        type: actionTypes.AGRO_AUTH_START
    }
}
export const authReport = report => {
    return {
        type: actionTypes.AGRO_AUTH_REPORT,
        report: report
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AGRO_AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AGRO_AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AGRO_AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const VaasUserSignup = (email, password1, password2, first_name, last_name, phone, slug) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/rest-auth/registration/', {
            email: email,
            password1: password1,
            password2: password2,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            slug: slug,


        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 3000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                dispatch(createMessage({ authLogin: 'Welcome to Agrolyte please Update your Profile' }));
            })
            .catch(err => {
                dispatch(authFail(err));
                dispatch(authReport(err));
                dispatch(returnErrors(err.response.data, err.response.status));
            })
    }
}
export const VaasUserLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/rest-auth/login/', {
            email: email,
            password: password
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 30000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}

// CHECK TOKEN & LOAD USER
export const getUserData = () => (dispatch) => {
    var mytoken = localStorage.getItem('token');
    axios
        .get('/rest-auth/user/', tokenConfig(mytoken))
        .then((res) => {
            dispatch({
                type: actionTypes.GET_USER_DATA,
                userData: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
// export const getUserData = (slug) => (dispatch) => {
//     mytoken = localStorage.getItem('token');
//     axios
//         .get(`/vaasuser/${slug}/`, tokenConfig(mytoken))
//         .then((res) => {
//             dispatch({
//                 type: actionTypes.GET_USER_DATA,
//                 userData: res.data,
//             });
//         })
//         .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
// };


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(getUserData());
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}


export const tokenConfig = (getoken) => {
    // Get token from state
    const token = getoken;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};
