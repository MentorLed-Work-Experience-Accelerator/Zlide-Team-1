import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./pages/BlogScreen.jsx/Blog";
import Login from "./pages/login/login";


export const router = createBrowserRouter([
    {path: '/', element: <App/> },
    {path: '/Blog', element: <Blog/> },
    {path: '/login', element: <Login/> },
    // {path: '/signup', element: <Sign/> },
])