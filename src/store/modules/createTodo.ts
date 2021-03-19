// import { Module, getModule, Action, VuexModule, Mutation } from 'vuex-module-decorators'
// // import listTask from "@/store/modules/"
// import store from "@/store"
// import { Todo } from "@/store/models/todo"
// import { API } from "@/api"

// @Module({
//     namespaced: true,
//     name: 'createTask',
//     store,
//     dynamic: true,
// })
// class CreateTodo extends VuexModule {
//     Todos: Todo[] = [] as  Todo[]
//     Task: Todo = {} as Todo

//     @Mutation
//     updateList(obj: Todo){
//         listTask.todoList.unshift(obj)
//     }

//     @Action({commit: 'updateList'})
//     async createTodo(todo: Todo){
//         try{
//             const response = await API.post('todo/', todo)
//             return response.data
//         }
//         catch(e){
//             console.log(e)
//         }    
//     }

//     @Action({commit: 'updateList'})
//     async editTodo(todo: Todo){
//         try{
//             const response = await API.post('todo/', todo)
//             return response.data
//         }
//         catch(e){
//             console.log(e)
//         }    
//     }

//     @Action({commit: 'deleteList'})
//     async deleteTodo(todo: Todo){
//         try{
//             const response = await API.post('todo/', todo)
//             return response.data
//         }
//         catch(e){
//             console.log(e)
//         }    
//     }



// }

// export default getModule(CreateTodo);