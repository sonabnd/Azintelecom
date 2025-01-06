import { createBrowserRouter } from "react-router-dom";
import AuthProtectedComponent from "./protected/auth-protected.component";
import PublicComponent from "../core/layouts/public/public.component";
import HomeComponent from "../pages/home/home.component";
import { Routes } from "./routes";

const router = createBrowserRouter([
    {
        element: <AuthProtectedComponent layout = 'public'><PublicComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>
            },
        ]

    }
],{basename: '/',})

export default router