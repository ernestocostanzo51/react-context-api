import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function DefLayout(){
    return(
        <>
        <AppHeader/>
        <main>
            <Outlet/>
        </main>
        <AppFooter/>
        </>
    )
}