import * as mutationFunction from './mutation-types'

/**
 * mutation对象
 */
export default {
    [mutationFunction.COUNT_ADD](state, payload) {
        state.count += payload
    },
    [mutationFunction.COUNT_DECREMENT](state, payload) {
        state.count -= payload
    },
    [mutationFunction.HANDLE_FIRST_NAME](state, payload) {
        state.firstName = payload
    },
    [mutationFunction.HANDLE_Last_NAME](state, payload) {
        state.lastName = payload
    },
    [mutationFunction.SUBMIT_BUT](state, payload) {
        state.firstName = payload
    }
}
