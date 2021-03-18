import { Module, getModule, Action, VuexModule } from 'vuex-module-decorators'
import store from "@/store"
import { API } from "@/api"
// import { Todo } from "@/store/models/todo"


@Module({
    namespaced: true,
    name: 'createTask',
    store,
    dynamic: true,
})
class CreateTodo extends VuexModule {

    // @Mutation
    // addTodo(todo: Todo){
    //     this.todoList.push(todo)
    // }

    @Action({})
    async createTodo(todo: string){
        try{
            await API.post('todo/', {"note": todo})
        }
        catch(e){
            console.log(e)
        }
          
    }

}

export default getModule(CreateTodo);