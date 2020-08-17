<template>
    <div>
        <label for="firstName">firstName:</label>
        <input type="text" v-model.lazy="firstName" id="firstName">
        <label for="lastName">lastName:</label>
        <input type="text" v-model.lazy="lastName" id="lastName">

        <div>VuexCpn1组件</div>
        <div>fullName：{{ $store.getters.fullName }}</div>
    </div>
</template>

<script>
import * as mutationFun from '../store/mutation-types'

export default {
    name: "VuexCpn4",
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
    }
}
</script>

<style scoped>

</style>
