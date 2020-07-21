<template>
    <div>
        <button @click="requestAxiosGet">axios的get请求</button><br>
        <button @click="requestAxiosPost">axios的post请求</button><br>
        <button @click="requestAxiosParallel">axios的并行请求</button><br>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "AxiosCpn1",
    created() {
    },
    methods: {
        requestAxiosGet() {
            // axios.get('http://httpbin.org/get?param=hello').then(res => {
            //       console.log(res)
            // }).catch(err => {
            //     console.log(err)
            // })
            axios({
                method: 'get',
                url: 'http://httpbin.org/get',
                params: {
                    param: 'hello'
                }
            }).then(response => {
              console.log(response)
            }).catch(err => {
              console.log(err)
            })
        },
        requestAxiosPost() {
            axios({
                method: 'post',
                url: 'http://httpbin.org/post',
                data: {
                    firstName: 'Jjcc',
                    lastName: '123321'
                }
            }).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        },
        requestAxiosParallel() {
            // 并行请求，两个请求都响应了，才会回调then中定义的函数
            const axios1 = axios({
                method: 'get',
                url: 'http://httpbin.org/get',
                params: {
                    param: 'hello'
                }
            })
            const axios2 = axios({
                method: 'get',
                url: 'http://httpbin.org/get',
                params: {
                    param: 'world'
                }
            })
            axios.all([axios1, axios2]).then(response => {
                console.log(response[0].data.args.param + ' ' + response[1].data.args.param)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
