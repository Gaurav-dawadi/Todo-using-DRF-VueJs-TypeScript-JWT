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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
