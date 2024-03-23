import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./pages/BlogScreen/Blog";
import Login from "./pages/login/login";
import Reset from "./pages/reset/reset";
import Signup from "./pages/signup/signup";
import About from "./pages/aboutus/about";
import Answer from "./pages/faq/answer";
import Dashboard from "./pages/dashboard/dashboard";
import Contact from "./pages/contact/contact";
import Billing from "./pages/contact/billing/billing";
import Issue from "./pages/contact/issues/issue";



export const router = createBrowserRouter([
    {path: '/', element: <App/> },
    {path: '/Blog', element: <Blog/> },
    {path: '/login', element: <Login/> },
    {path: '/signup', element: <Signup/> },
    {path: '/reset', element: <Reset /> },
    {path: '/about', element: <About /> },
    {path: '/faq', element: <Answer /> },
    {path: '/dashboard', element: <Dashboard />  },
    {path: '/contact', element: <Contact />  },
    {path: '/billing', element: <Billing />  },
    {path: '/issue', element: <Issue />  },
    // {path: '/template', element: <Template />   },
])