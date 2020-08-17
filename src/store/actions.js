import * as mutationFunction from './mutation-types'

/**
 * action对象
 */

export default {
    [mutationFunction.SUBMIT_ACTION](context, payload) {
        setTimeout(() => {//异步操作
            //state数据的修改还是由mutation执行
            context.commit(mutationFunction.SUBMIT_BUT, payload);
        }, 2000)
    },
    [mutationFunction.SUBMIT_ACTION_PROMISE](context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit(mutationFunction.SUBMIT_BUT, payload)
                resolve("异步操作完成了" + payload)
            }, 2000)
        })
    }
}
