<template>
  <div id="app">
<!--    <vuex-cpn1 />-->
<!--    <vuex-cpn2 />-->
<!--    <vuex-cpn3 />-->
<!--      <hr>-->
<!--    <vuex-cpn4 />-->
<!--      <hr>-->
<!--    <vuex-cpn5 />-->
      <AxiosCpn1 />
      <hr>
      <AxiosCpn2/>
      <hr>
      <axios-cpn3/>
  </div>
</template>

<script>
import VuexCpn1 from './components/VuexCpn1'
import VuexCpn2 from './components/VuexCpn2'
import VuexCpn3 from './components/VuexCpn3'
import VuexCpn4 from './components/VuexCpn4'
import VuexCpn5 from './components/VuexCpn5'
import AxiosCpn1 from './components/AxiosCpn1'
import AxiosCpn2 from './components/AxiosCpn2'
import AxiosCpn3 from './components/AxiosCpn3'

export default {
  components: {
    VuexCpn1, VuexCpn2, VuexCpn3, VuexCpn4, VuexCpn5, AxiosCpn1, AxiosCpn2, AxiosCpn3
  },
  data () {
    return {
    };
  },
  computed: {

  },
  methods: {

  }
}
</script>
