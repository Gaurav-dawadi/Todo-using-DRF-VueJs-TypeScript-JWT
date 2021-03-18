<template>
    <div class="container mt-5">
        <div class='form-header'>
            <h2>Login</h2>
        </div>
        <div class='form-body mt-5'>
            <form>
                <el-row class="mt-3">
                    <label>Username</label>
                    <i class="el-icon-user-solid"></i>
                    <el-input placeholder="Username" v-model="username"></el-input>
                </el-row>
                <el-row class="mt-3">
                    <label>Password</label>
                    <i class="el-icon-s-cooperation"></i>
                    <el-input placeholder="Password" v-model="password" show-password></el-input>
                </el-row>
                <div class="mt-4">
                    <el-button @click="login" type="primary" round class="btn btn-primary btn-md">Login</el-button>
                </div>
            </form>  
        </div>
    </div>      
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import { Input, Button } from 'element-ui';
import authUser from "../store/modules/authUser"

@Component({
    components: {
        Input,
        Button
    }
})
export default class Login extends Vue {
    username = '';
    password = '';

    async login() {
        try{
            await authUser.login({
                username: this.username,
                password: this.password,
            })
        }
        catch(e){
            console.log("Error during login ", e)
        }
        this.$router.push('/')
    }
}

</script>


<style scoped>

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
    display: flex;
    align-items: center;
}
</style>
