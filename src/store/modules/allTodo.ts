import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators"
import store from "@/store"
import { API } from "@/api"

@Module({
    namespaced: true,
    name: 'allTask',
    store,
    dynamic: true
})
class AllTodo extends VuexModule {
    todoList: object[] = []

    @Mutation
    setTodo(todo: object[]){
        this.todoList = todo
    }

    @Action({commit: 'setTodo'})
    async getTodo(){
        try{
            if(window.localStorage.getItem("id_token")){
                const response = await API.get('todo/')
                return response.data
            }
        }
        catch(e){
            console.log("Error during fetching ", e)
        }
    }
}

export default getModule(AllTodo);