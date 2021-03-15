<template>
  <div class="container mt-5 mb-5">
    <h3>Todo List</h3>
    <div v-if='loggedStatus === false'>
      <h3>Nothing to show. Please Login to view info</h3>
    </div>
    <div v-if='loggedStatus === true'>
      <el-table
        :data="todoList"
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
import { Table } from 'element-ui'
import { API } from "../api"

@Component({
  components: {
    Table
  },
})
export default class Home extends Vue {
  todoList: object[] = []

  async created(){
    try{
      const response = await API.get('todo/')
      this.todoList = [...this.todoList, ...response.data]
    }
    catch(e){
      console.log("Error during fetching ", e)
    }
  }

  get loggedStatus(){
    return authUser.LoggedIn
  }
}
</script>


<style scoped>
@import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
</style>