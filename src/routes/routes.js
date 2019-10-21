import RootComponent from "../materialcomponents/Root/RootComponent.vue"
import PostsComponent from "../materialcomponents/Posts/PostsComponent.vue"
import PostStepComponent from "../materialcomponents/Posts/PostStepComponent.vue"
import LoginComponent from "../materialcomponents/Login/LoginComponent.vue"
import  RegisterComponent from "../materialcomponents/Register/RegisterComponent.vue"

const routes = [
{
    path:"/",
    component:LoginComponent,
},
{
    path:"/app",
    component:RootComponent,
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
        }
    ]
}
];

export default routes;