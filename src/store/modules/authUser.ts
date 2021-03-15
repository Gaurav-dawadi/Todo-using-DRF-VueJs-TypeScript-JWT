import { API, setToken } from "@/api"
import JwtService from '@/api/jwt.service'
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
        setToken()  
    }

    get LoggedIn(){
        return this.isLoggedIn
    }

    @Action({commit: 'setLoggedIn'})
    async login(userSubmit: UserSubmit) {
        try {
            const response = await API.post('login/', userSubmit)  
            JwtService.saveToken(response.data.access)
            return true
        }
        catch(e) {
            console.log(e)
        } 
    }
}
export default getModule(AuthUserModule);