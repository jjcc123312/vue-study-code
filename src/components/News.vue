<template>
    <div><h2>这里是id={{ id }}的新闻</h2></div>
</template>

<script>
export default {
    name: "News",
    props: {
        id: { type: Number, required: true}
    }
}
</script>

<style scoped>

</style>
