export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const Login = () => ({
    type: "LOGOUT"
})

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START"
})

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user
})

export const UpdateFailure = (user) => ({
    type: "LOGIN_FAILURE",
    payload: user
})