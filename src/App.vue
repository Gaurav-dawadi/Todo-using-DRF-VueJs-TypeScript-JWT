<template>
  <div id="app">
    <BaseHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import BaseHeader from "./components/BaseHeader.vue"
import { Component, Vue } from "vue-property-decorator"
// import { API, setToken } from "./api"
import authUser from "./store/modules/authUser"

@Component({
  components: {
    BaseHeader
  }
})
export default class App extends Vue{

  beforeCreate(){
    if(window.localStorage.getItem("id_token")){
      authUser.setLoggedIn(true)
    }
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>
