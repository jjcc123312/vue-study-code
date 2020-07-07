<template>
    <div id="home">
        <h2>我的主页</h2>
        <router-link :to="{ name: 'Article', params: { id: 1 } }"><h2>文章1</h2></router-link>
<!--        <router-link :to="{ name: 'Article', params: { id: 2 } }"><h2>文章2</h2></router-link>-->
        <a @click.prevent="toArticle"><h2>文章2</h2></a>
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
            let newId = '111'
            this.router.push({ path: `/home/news/${newId}` })
        },
        toArticle() {
            // 编程式导航：命名路由
            let article = 123
            this.router.push({ name: 'Article', params: { id: article } })
        }
    }
}
</script>

<style scoped>

</style>
