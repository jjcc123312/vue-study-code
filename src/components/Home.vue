<template>
    <div id="home">
        <h2>我的主页</h2>
        <a @click.prevent="toArticle(1111)"><h2>文章1</h2></a>
        <a @click.prevent="toNews"><h2>新闻</h2></a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            router: this.$router
        }
    },
    methods: {
        toNews() {
            // 编程式导航：动态路由
            let newId = 1113
            this.router.push({ path: '/home/news', query: { id : newId } })
        },
        toArticle(id) {
            // 编程式导航：命名路由
            this.router.push({ name: 'Article', params: { id: id } })
        }
    }
}
</script>

<style scoped>

</style>
