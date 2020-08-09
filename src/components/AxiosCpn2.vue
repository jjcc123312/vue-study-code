<template>
    <div>
        <button @click="requestAxiosTheForm">axios发送form表单请求</button>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
    name: "AxiosCpn2",
    methods: {
        requestAxiosTheForm() {
            const formVal = {
                firstName: 'JJcc',
                lastName: '123321'
            }
            axios({
                method: 'post',
                url: 'http://httpbin.org/post',
                data: qs.stringify(formVal),    // 发送表单参数
                headers: {
                }
            }).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
