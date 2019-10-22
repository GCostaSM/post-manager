import  RootDarkCmponent from "./materialcomponents/Root/RootDarkCmponent.vue"
import  PostsComponent from "./materialcomponents/Posts/PostsComponent.vue"
import  LoginComponent from "./materialcomponents/Login/LoginComponent.vue"
import  PostStepComponent from "./materialcomponents/Posts/PostStepComponent.vue"
import  LoginComponent from "./materialcomponents/Login/LoginComponent.vue"
import  UsersComponent from "./materialcomponents/Users/UsersComponent.vue"
import  RegisterComponent from "./materialcomponents/Register/RegisterComponent.vue"

const MaterialComponent = {
        install(Vue) {
            Vue.component("root-component",RootCmponent)
            Vue.component("posts-component",PostsComponent)
            Vue.component("login-component",LoginComponent)
            Vue.component("post-step-component",PostStepComponent)
            Vue.component("users-component",UsersComponent)
            Vue.component("register-component",RegisterComponent)
        }
};

export default MaterialComponent;