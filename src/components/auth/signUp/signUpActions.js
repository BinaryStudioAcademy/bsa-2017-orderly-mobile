export const SIGN_UP_USER = 'SIGN_UP_USER';
export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
export const SIGN_UP_PROCESS = 'SIGN_UP_PROCESS'; // ??????
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export function signUp(data) {
    return {
        type: SIGN_UP_USER,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
    };
}

export function changeUserData(data) {
    return {
        type: CHANGE_USER_DATA,
        field: data
    };
}
