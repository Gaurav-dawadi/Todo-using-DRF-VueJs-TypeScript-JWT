<template>
    <div class="container mt-5">
        <div class='form-header'>
            <h2>Register</h2>
        </div>
        <div class='form-body mt-5'>
            <form @submit.prevent="register">
                <el-row class="mt-3">
                    <label>Username</label>
                    <el-input placeholder="Username" v-model="username"></el-input>
                </el-row>
                <el-row class="mt-3">
                    <label>Email</label>
                    <el-input placeholder="Email" v-model="email"></el-input>
                </el-row>
                <el-row class="mt-3">
                    <label>FirstName</label>
                    <el-input placeholder="FirstName" v-model="firstname"></el-input>
                </el-row>
                <el-row class="mt-3">
                    <label>LastName</label>
                    <el-input placeholder="LastName" v-model="lastname"></el-input>
                </el-row>
                <el-row class="mt-3">
                    <label>Password</label>
                    <el-input placeholder="Password" v-model="password" show-password></el-input>
                </el-row>
                <el-row class="mt-3">
                    <label>Confirm Password</label>
                    <el-input placeholder="Confirm Password" v-model="password" show-password></el-input>
                </el-row>
                <div class="mt-4">
                    <el-button type="primary" round class="btn btn-primary btn-md">Sign Up</el-button>
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
export default class Register extends Vue {

}
</script>
