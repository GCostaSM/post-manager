//import RootComponent from "../materialcomponents/Root/RootComponent.vue"
import RootDarkComponent from "../materialcomponents/Root/RootDarkComponent.vue"
import PostsComponent from "../materialcomponents/Posts/PostsComponent.vue"
import PostStepComponent from "../materialcomponents/Posts/PostStepComponent.vue"
import LoginComponent from "../materialcomponents/Login/LoginComponent.vue"
import  RegisterComponent from "../materialcomponents/Register/RegisterComponent.vue"
import  UsersComponent from "../materialcomponents/Users/UsersComponent.vue"

const routes = [
{
    path:"/",
    component:LoginComponent,
},
{
    path:"/app",
    component:RootDarkComponent,
    children:[
        {
            path: "posts",
            name: "Posts",
            component: PostsComponent
        },
        {
            path: "poststep",
            name: "PostStep",
            component: PostStepComponent
        },
        {
            path: "register",
            name: "Register",
            component: RegisterComponent
        },
        {   
            path:"users",
            name:"Users",
            component:UsersComponent
        }
    ]
}
];

export default routes;