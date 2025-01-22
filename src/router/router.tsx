import { createBrowserRouter } from "react-router-dom";
import AuthProtectedComponent from "./protected/auth-protected.component";
import PublicComponent from "../core/layouts/public/public.component";
import HomeComponent from "../pages/home/home.component";
import { Routes } from "./routes";
import AboutPageComponent from "../pages/about-page/about-page.component";
import CareerPageComponent from "../pages/career-page/career-page.component";
import ContactUsComponent from "../pages/contact-us-page/contact-us-page.component";
import MuzuComponent from "../pages/about-page/muzu/muzu.component";
import NotFoundComponent from "../pages/not-found/not-found.component";

const router = createBrowserRouter([
    {
        element: <AuthProtectedComponent layout = 'public'><PublicComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>
            },
            {
                path: Routes.about,
                element: <AboutPageComponent/>
            },
            {
                path: Routes.career,
                element: <CareerPageComponent/>
            },
            {
                path: Routes.contact,
                element: <ContactUsComponent/>
            },
            {
                path: '*',
                element: <NotFoundComponent/>
            }
        ]

    }
],{basename: '/',})

export default router