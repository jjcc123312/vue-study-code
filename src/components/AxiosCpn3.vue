<template>
    <div>
        <button @click="requestThePost">通过创建的axios实例请求</button>
    </div>
</template>

<script>
import request from '../utils/request'

export default {
    name: "AxiosCpn3",
    methods: {
        requestThePost() {
            request({
                url: '/post',
                method: 'post',
                data: {
                    name: 'Jjcc'
                }
            }).then(response => {
                console.log('success')
                console.log(response)
            }).catch(err => {
                console.log('error')
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
