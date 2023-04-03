import { Route, Routes } from "react-router-dom";
import {Home , Cart} from "../page"

export default function AllRoutes() {
    return(
        <div className="bg">

            <Routes>
                <Route path="/" element ={<Home title ="Home"/>}/>
                <Route path="/cart" element={<Cart  title="Cart"/> } />
             </Routes>
        </div>
    )
    
}