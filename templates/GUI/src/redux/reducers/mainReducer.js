import * as actionTypes from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    vaas_user_is_authenticated: false,
    vaas_user_auth_report: {},
    get_user_data: {},
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.AGRO_AUTH_SUCCESS:
            localStorage.setItem('token', action.token);
            var authcheck;
            if (action.token === undefined || action.token == null) {
                authcheck = false
            } else {
                authcheck = true
            }
            return {
                ...state,
                ...action.payload,
                vaas_user_is_authenticated: authcheck,
            };
        case actionTypes.AGRO_AUTH_REPORT:
            return {
                ...state,
                ...action.report,
                vaas_user_auth_report: action.report,
            };
        case actionTypes.GET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                get_user_data: action.userData,
            };
        case actionTypes.AGRO_AUTH_FAIL:
        case actionTypes.AGRO_AUTH_LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                vaas_user_is_authenticated: false,
                vaas_user_auth_report: {},
                get_user_data: {},
            };
        default:
            return state;
    }
}
