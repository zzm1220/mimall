import Vue from 'vue';
import Router from 'vue-router';
import Index from "./pages/index";
import Login from "./pages/login";
import Home from "./pages/home";
import Product from "./pages/product";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Order from "./pages/order";
import OrderList from "./pages/order-list";
import OrderPay from "./pages/order-pay";
import OrderConfirm from "./pages/order-confirm";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        redirect: "/index",
        children: [
            {
                path: "/index",
                name: "index",
                component: Index
            },
            {
                path: "/product/:id",
                name: "product",
                component: Product
            },
            {
                path: "/detail/:id",
                name: "detail",
                component: Detail
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
    },
    {
        path: "/order",
        name: "order",
        component: Order,
        redirect: "/order/list",
        children: [
            {
                path: "list",
                name: "order-list",
                component: OrderList
            },
            {
                path: "pay",
                name: "order-pay",
                component: OrderPay
            },
            {
                path: "confirm",
                name: "order-confirm",
                component: OrderConfirm
            }
        ]
    }
];

const router = new Router({
    mode: "history",
    routes
});

export default router;



