import config from "~/config";


import Home from "~/pages/Home";
import Detail from "~/pages/Detail";
import Profile from "~/pages/Profile";
import Login from "~/pages/Login/Login";
import Signup from "~/pages/Signup/Signup";
import Forgot from "~/pages/Forgot/Forgot";
import Change from "~/pages/Change/Change";
import Cart from "~/pages/Cart/Cart";
import SearchProduct from "~/pages/SearchProduct/SearchProduct";
import Bookmark from "~/pages/Bookmark/Bookmark";
import HomeAdmin from "~/pages/Admin/HomeAdmin";
import ProductAdmin from "~/pages/Admin/ProductAdmin";
import { AuthenLayout, AdminLayout } from "~/layouts";



const publicRoutes = [
    { path: '/', component: Home },
    { path: config.routes.home, component: Home },
    { path: config.routes.detail, component: Home },
    { path: config.routes.detailId, component: Detail },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.bookmark, component: Bookmark},
    { path: config.routes.login, component: Login, layout: AuthenLayout },
    { path: config.routes.signup, component: Signup, layout: AuthenLayout },
    { path: config.routes.forgot, component: Forgot, layout: AuthenLayout },
    { path: config.routes.change, component: Change, layout: AuthenLayout },
    { path: config.routes.search, component: SearchProduct }
]
const privateRoutes = [
    { path: config.routes.profile, component: Profile }
]
const adminRoutes = [
    { path: config.routes.adminHome, component: HomeAdmin , layout: AdminLayout},
    { path: config.routes.adminProduct, component: ProductAdmin, layout: AdminLayout }
]

export { publicRoutes, privateRoutes, adminRoutes }