<template>
    <div class="container mt-5">
        <div class='form-header'>
            <h2>Login</h2>
        </div>
        <div class='form-body mt-5'>
            <form @submit.prevent="login">
                <el-row class="mt-3">
                    <label>Username</label>
                    <el-input placeholder="Username" v-model="username"></el-input>
                </el-row>
                <el-row class="mt-3">
                    <label>Password</label>
                    <el-input placeholder="Password" v-model="password" show-password></el-input>
                </el-row>
                <div class="mt-4">
                    <el-button type="primary" round class="btn btn-primary btn-md">Login</el-button>
                </div>
            </form>  
        </div>
    </div>      
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import { Input, Button } from 'element-ui';

@Component({
    components: {
        Input,
        Button
    }
})
export default class Login extends Vue {
    username = '';
    password = '';

    login() {
        
        return
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
