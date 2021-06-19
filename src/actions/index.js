import {SIGN_IN, SIGN_OUT} from "./types"

export const signIn = (userId) => {
    return {
        payload: userId,
        type: SIGN_IN
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}