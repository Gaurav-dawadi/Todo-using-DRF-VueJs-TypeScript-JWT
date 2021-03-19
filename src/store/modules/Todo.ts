import { Module, getModule, Mutation, Action, MutationAction, VuexModule } from "vuex-module-decorators"
import store from "@/store"
import { API } from "@/api"
import { Todo } from "@/store/models/todo"


@Module({
    namespaced: true,
    name: 'todo',
    store,
    dynamic: true
})
class Task extends VuexModule{
    Todos: object[] = []

    @Mutation
    listTodo(todos: object[]){
        this.Todos = todos
    }

    @Mutation
    setTodo(todo: Todo){
        this.Todos.unshift(todo)
    }

    get ListofTodos(){
        return this.Todos.slice(0, 5)
    }

    @Action({commit: 'listTodo'})
    async getTodo(){
        const response = await API.get("todo/")
        return response.data
    }

    @Action({commit: 'setTodo'})
    async createTodo(task: Todo){
        try{
            if(window.localStorage.getItem("id_token")){
                const response = await API.post("todo/", task)
                console.log("POST TODO: ", response.data)
                return response.data
            }
        }
        catch(e){
            console.log(e)
        }
    }
}

export default getModule(Task)
