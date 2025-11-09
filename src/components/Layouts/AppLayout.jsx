import { Outlet } from "react-router-dom"
import { Headers } from "../UI/Headers"

export const AppLayout = () => {
    return <>
    <Headers />
    <Outlet />
    </>
}