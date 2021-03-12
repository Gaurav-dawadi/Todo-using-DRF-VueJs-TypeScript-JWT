import { API, setToken } from "@/api"
import store from "@/store"
import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators"
import { UserSubmit } from "../models/authUser"


@Module({
    namespaced: true,
    name: 'authUser',
    store,
    dynamic: true,
})
class AuthUserModule extends VuexModule {
    isLoggedIn = false

    @Mutation
    setLoggedIn(isLoggedIn: boolean){
        this.isLoggedIn = isLoggedIn
    }

    @Action({commit: 'setLoggedIn'})
    async login(userSubmit: UserSubmit) {
        try {
            const response = await API.post('login/', userSubmit)
            if(!localStorage.getItem("AccessToken")) {
                setToken(response.data.access)
                localStorage.setItem("AccessToken", API.defaults.headers.common["Authorization"])
            }  
            return true
        }
        catch(e) {
            console.log(e)
        } 
    }
}
export default getModule(AuthUserModule);