<template>
    <div>
        <div>技术值：{{ $store.state.count }}</div>
        <button @click="add">+5</button>
        <button @click="subtract">-5</button>
    </div>
</template>

<script>
import * as mutationFun from '../store/mutation-types'
export default {
    name: "VuexCpn1",
    data() {
        return {
        }
    },
    methods: {
        add() {
            this.$store.commit(mutationFun.COUNT_ADD, 5)
        },
        subtract() {
            this.$store.commit(mutationFun.COUNT_DECREMENT, 5)
        }
    }
}
</script>

<style scoped>

</style>
