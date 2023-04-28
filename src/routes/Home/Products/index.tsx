import { Outlet } from "react-router-dom";
import ProductMenu from "../../../components/ProductMenu";


export default function Products(){

    return(
        <main>
            <section>
                <div className="mt-20 mb-20">
                    <ProductMenu />
                </div>
                <Outlet/>
            </section>
        </main>          
    );
}