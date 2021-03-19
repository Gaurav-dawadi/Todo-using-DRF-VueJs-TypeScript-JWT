<template>
    <div class="container mt-5 mb-5">
        <div>
            <el-table
            :data="todolist"
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
                    <el-row>
                        <el-col :span="8"><el-button type="success" icon="el-icon-edit"></el-button></el-col>
                        <el-col :span="8"><el-button type="danger" icon="el-icon-delete"></el-button></el-col>
                    </el-row>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>


<script lang="ts">
import { Table, Button } from "element-ui"
import { Vue, Component } from "vue-property-decorator"
import todo from "../store/modules/Todo"

@Component({
    components: {
        Table,
        Button
    }
})
export default class AllTodo extends Vue{

    async created(){
        await todo.getTodo()
    }

    get todolist(){
        return todo.Todos
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