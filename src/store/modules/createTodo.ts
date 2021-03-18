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

    @Mutation
    updateList(obj: Todo){
        listTask.todoList.push(obj)
    }

    @Action({commit: 'updateList'})
    async createTodo(todo: string){
        try{
            const response = await API.post('todo/', {"note": todo})
            return response.data
        }
        catch(e){
            console.log(e)
        }    
    }



}

export default getModule(CreateTodo);