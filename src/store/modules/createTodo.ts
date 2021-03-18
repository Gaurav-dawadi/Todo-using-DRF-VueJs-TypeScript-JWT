import { Module, getModule, Action, VuexModule, Mutation } from 'vuex-module-decorators'
import listTask from "@/store/modules/listTodo"
import store from "@/store"
import { Todo } from "@/store/models/todo"
import { API } from "@/api"

@Module({
    namespaced: true,
    name: 'createTask',
    store,
    dynamic: true,
})
class CreateTodo extends VuexModule {

    Task: Todo = {} as Todo

    @Mutation
    updateList(obj: Todo){
        listTask.todoList.unshift(obj)
    }

    @Action({commit: 'updateList'})
    async createTodo(todo: string){
        try{
            this.Task.note = todo
            const response = await API.post('todo/', this.Task)
            return response.data
        }
        catch(e){
            console.log(e)
        }    
    }



}

export default getModule(CreateTodo);