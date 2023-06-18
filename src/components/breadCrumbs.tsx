import { useLocation } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation()
    console.log(location)
    return(
        <div>
            Breadcrumbs
        </div>
    )
}