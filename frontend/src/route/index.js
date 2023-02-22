
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard"
import ProductList from "../components/ProductList";
import ProductPage from "../productComponent/ProductPage";

export const MainRoute = [
    {
        id: 1,
        name: "dashboard",
        path: "/auth/dashboard",
        element: <Dashboard />,
    },
    {
        id: 2,
        name: "Register",
        path: "/register",
        element: <Register />,
    },
    {
        id: 3,
        name: "Login",
        path: "/",
        element: <Login />,
    },
    {
        id: 4,
        name: "Products",
        path: "/auth/products",
        element: <ProductList />,
    },
    {
        id: 5,
        name: "Products",
        path: "/auth/productDB",
        element: <ProductPage />,
    },
    {
        id: 6,
        name: "Products",
        path: "/auth/productDB",
        element: <ProductPage />,
    },

]

// export const MainRoute = [
//     {
//         id: 1,
//         name: "dashboard",
//         path: "/auth/dashboard",
//         // element: <Dashboard />,
//         element:[<Navbar/>,<Dashboard/>],
//     },
//     {
//         id: 2,
//         name: "Register",
//         path: "/register",
//         element: <Register />,
//     },
//     {
//         id: 3,
//         name: "Login",
//         path: "/",
//         element: <Login />,
//     },
//     {
//         id: 4,
//         name: "Products",
//         path: "/auth/products",
//         element:[<Navbar/>,<ProductList/>],
//     },
//     {
//         id: 5,
//         name: "Products",
//         path: "/auth/productDB",
//         element:[<Navbar/>,<ProductPage/>],
//     },
//     {
//         id: 6,
//         name: "Products",
//         path: "/auth/productDB/:id",
//         element:[<Navbar/>,<DetailProduct/>],
//     },

// ]