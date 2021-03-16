<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">TODO</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item" v-if='!loggedStatus'>
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if='loggedStatus'>
                        <router-link class="nav-link" to="/allTodos">All Todos</router-link>
                    </li>
                    <li class="nav-item" v-if='loggedStatus'>
                        <router-link @click.native="logout" class="nav-link" to='/'>Logout</router-link>
                    </li>
                    <li class="nav-item" v-if='!loggedStatus'>
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import authUser from "../store/modules/authUser"
import { destroyToken } from "../api/jwt.service"
import { clearToken } from "../api"

@Component({})
export default class BaseHeader extends Vue {
    
    get loggedStatus(){
        return authUser.LoggedIn
    }

    logout(){
        destroyToken();
        clearToken();
        this.$router.push('/');
        // history.go(0);
        window.location.reload();
    }
}

</script>
