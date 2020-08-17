<template>
    <div>
        <div>技术值：{{ $store.state.count }}</div>
        <button @click="add">+5</button>
        <button @click="subtract">-5</button>
    </div>
</template>

<script>
export default {
    name: "VuexCpn2",
    data() {
        return {
        }
    },
    methods: {
        add() {
            this.$store.commit('increment', 5)
        },
        subtract() {
            this.$store.commit('decrement', 5)
        }
    }
}
</script>

<style scoped>

</style>
