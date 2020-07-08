<template>
    <div>
        <h2>
            这里是id={{ id }}的文章
        </h2>
    </div>
</template>

<script>
export default {
    name: "Article",
    props: {
        id: { type: Number, required: true}
    }
}
</script>

<style scoped>

</style>
