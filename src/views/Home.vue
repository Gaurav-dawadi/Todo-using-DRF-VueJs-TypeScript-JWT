<template>
  <div class="container mt-5 mb-5">

    <div class="mt-5 mb-5">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="form.note" placeholder="Todo" class="main-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" round class="main-button">ADD</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-if='loggedStatus === false'>
      <h3 style="text-align: center">Nothing to show. Please Login to view info</h3>
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
        <el-table-column 
          label='Action'
        >
        <template slot-scope="scope">
          {{scope.row.id}}
          <el-row>
            <el-col :span="8"><el-button type="success" icon="el-icon-edit"></el-button></el-col>
            <el-col :span="8"><el-button type="danger" icon="el-icon-delete"></el-button></el-col>
          </el-row>
      </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import authUser from "../store/modules/authUser"
import todo from "../store/modules/Todo"
import { Form, Table, Button } from 'element-ui'
import { Todo } from "../store/models/todo";

@Component({
  components: {
    Table,
    Form,
    Button
  },
})
export default class Home extends Vue {

  form: Todo = {
    note: ''
  } as Todo

  async created(){
    await todo.getTodo()
  }

  get loggedStatus(){
    return authUser.LoggedIn
  }

  get listOfTodo(){
    return todo.ListofTodos
  }

  async onSubmit(){
    try{
      await todo.createTodo(this.form)
    }
    finally{
      this.form.note = ''  
    }
  }

}
</script>


<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");

*{
  font: bold;
  font-weight: 700;
  font-size: inherit;
  color: black;
}

.main-input{
  width: 50em;
}

.main-button{
  width: 8em;
}
</style>