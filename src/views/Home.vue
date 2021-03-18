<template>
  <div class="container mt-5 mb-5">
    <h3>Todo List</h3>

    <div class="mt-5 mb-5">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="form.todo" placeholder="Todo" class="main-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="main-button">ADD</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-if='loggedStatus === false'>
      <h3>Nothing to show. Please Login to view info</h3>
    </div>
    <div v-if='loggedStatus === true'>
      <el-table
        :data="listOfTodo"
        style="width: 100%"
      >
        <el-table-column 
          prop='note'
          label='Note'
        >
        </el-table-column>
        <el-table-column 
          prop='created_at'
          label='Created At'
        >
        </el-table-column>
        <el-table-column 
          prop='modified_at'
          label='Updated At'
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import authUser from "../store/modules/authUser"
import createTask from "../store/modules/createTodo"
import listTask from "../store/modules/listTodo"
import { Form, Table } from 'element-ui'
import { API } from "../api"

@Component({
  components: {
    Table,
    Form
  },
})
export default class Home extends Vue {
  
  form = {
    todo: ''
  }

  async onSubmit(){
    await createTask.createTodo(this.form.todo)
  }

  async created(){
    await listTask.getTodo() 
  }

  get loggedStatus(){
    return authUser.LoggedIn
  }

  get listOfTodo(){
    return listTask.todoList
  }

}
</script>


<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
</style>