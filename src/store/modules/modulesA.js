import * as mutationFunction from '../mutation-types'

const state = {
    modulesCount: 12
}

const mutations = {
    [mutationFunction.MUTATION_FUNC_LOCAL](state, payload) {
        state.modulesCount += payload
    },
    [mutationFunction.MUTATION_FUNC_LOCAL_DECRE](state, payload) {
        state.modulesCount -=  payload
    }
}

const actions = {
    [mutationFunction.LOCAL_ACTION](context, payload) {
        const rootState = context.rootState
        const rootGetters = context.rootGetters
        console.log('全局参数：' + rootState.count)
        console.log('全局Getters：' + rootGetters.fullName)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit(mutationFunction.MUTATION_FUNC_LOCAL, payload)
                resolve("异步操作完成了" + payload)
            }, 2500)
        })
    }
}

const getters = {
    [mutationFunction.LOCAL_GETTERS](state, getters, rootState, rootGetters) {
        console.log(rootState.firstName)
        console.log('1111' + rootGetters.fullName)
        return state.modulesCount
    }
}

export default {
    state, mutations, actions, getters
}
