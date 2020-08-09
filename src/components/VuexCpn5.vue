<template>
    <div>
<!--        <label for="localState"></label>-->
<!--        <input id="localState"  />-->
        <button @click="increment">+</button>
        <button @click="decrement">-</button><br>
        <button @click="asyncAction">触发异步操作promise</button>
        <h1>调用局部模块内状态：{{ $store.state.modulesA.modulesCount }}</h1>
        <h1>局部模块内的Getters：{{ $store.getters.modulesGetters }}</h1>
    </div>
</template>

<script>
import * as mutationFun from '../store/mutation-types'

export default {
    name: "VuexCpn4",
    computed: {
    },
    data() {
        return {
            gettersVal: null
        }
    },
    methods: {
        increment() {
            this.$store.commit(mutationFun.MUTATION_FUNC_LOCAL, 1)
            // console.log(this.)
        },
        decrement() {
            this.$store.commit(mutationFun.MUTATION_FUNC_LOCAL_DECRE, 1)
        },
        asyncAction() {
            const result = this.$store.dispatch(mutationFun.LOCAL_ACTION, 3)
            console.log(result)
        }
    }
}
</script>

<style scoped>

</style>
