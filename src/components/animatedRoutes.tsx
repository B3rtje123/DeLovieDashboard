import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../routes/Home";
import User from "../routes/User";

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/user/:id" element={<User/>} />
                {/* <Router path='/*' element={<NotFound />} /> */}
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;