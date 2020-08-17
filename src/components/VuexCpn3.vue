<template>
    <div>
        <label for="firstName">firstName:</label>
        <input type="text" v-model.lazy="firstName" id="firstName">
        <label for="lastName">lastName:</label>
        <input type="text" v-model.lazy="lastName" id="lastName">
        <div>VuexCpn1组件</div>
        <div>fullName：{{ $store.getters.fullName }}</div>

        <button @click="submitAction">触发异步操作</button>
        <button @click="submitActionPromise">触发异步操作之Promise</button>
    </div>
</template>

<script>
import * as mutationFun from '../store/mutation-types'
import * as mutationFunction from "../store/mutation-types";
export default {
    name: "VuexCpn3",
    computed: {
        firstName: {
            get() {
                return this.$store.state.firstName
            },
            set(newVal) {
                this.$store.commit(mutationFun.HANDLE_FIRST_NAME, newVal)
            }
        },
        lastName: {
            get() {
                return this.$store.state.lastName
            },
            set(newVal) {
                this.$store.commit(mutationFun.HANDLE_Last_NAME, newVal)
            }
        }
    },
    methods: {
        submitAction() {
            const name = 'Jjcc'
            this.$store.dispatch(mutationFunction.SUBMIT_ACTION, name)
        },
        submitActionPromise() {
            const name = 'jjcc1024'
            this.$store.dispatch(mutationFun.SUBMIT_ACTION_PROMISE, name)
                .then((data) => {
                console.log(data)
            })
        }
    }
}
</script>

<style scoped>

</style>
