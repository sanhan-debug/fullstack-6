import AddPage from "../Pages/AddPage";
import Home from "../Pages/Home";
import Root from "../Root";



const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/addpage",
                element:<AddPage/>
            }
        ]
    }
]

export default ROUTES