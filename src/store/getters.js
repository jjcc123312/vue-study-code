import * as mutationFunction from './mutation-types'

/**
 * getter对象
 */

export default {
    fullName(state) {
        return `${state.firstName}-${state.lastName}`
    }
}
