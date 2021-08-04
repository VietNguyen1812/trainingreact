import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home/index"));
const Login = lazy(() => import("../pages/Login/index"));
const Register = lazy(() => import("../pages/Register/index"));
const ListUser = lazy(() => import("../pages/ListUser/index"));
const Menu = lazy(() => import("../pages/Menu/index"));
const Store = lazy(() => import("../pages/Store/index"));
const CreateCategory = lazy(() => import("../pages/CreateCategory/index"));
const DetailUser = lazy(() => import("../pages/DetailUser/index"));
const DetailCategory = lazy(() => import("../pages/DetailCategory/index"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/listuser",
    component: ListUser,
  },
  {
    path: "/listcategory",
    component: Store,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/createcategory",
    component: CreateCategory,
  },
  {
    path: "/detailuser",
    component: DetailUser,
  },
  {
    path: "/detailcategory",
    component: DetailCategory,
  },
];
