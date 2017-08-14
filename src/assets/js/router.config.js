
import NewsHome from "../../components/NewsHome.vue";
import NewsFollow from "../../components/NewsFollow.vue";
import NewsColumn from "../../components/NewsColumn.vue";
import UserInfo from "../../components/UserInfo.vue";
var routes = [{
    path:"/home",
    component:NewsHome
},{
    path:"/follow",
    component:NewsFollow
},{
    path:"/column",
    component:NewsColumn
},
{
    path:"/userInfo",
    component:UserInfo
},
{
    path:"*",
    redirect:"/home"
}];
export default routes;

