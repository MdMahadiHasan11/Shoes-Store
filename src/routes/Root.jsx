import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Navber from "./component/Navber";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
const Root = () => {
    // const location =useLocation()
    // const isLogin =location.pathname.includes('login')
    return (
        // <div className="overflow-x-hidden text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
        <div className="overflow-x-hidden">
            <div className="fixed top-0 -z-10 h-full w-full mx-auto">
                {/* <div className="absolute top-0  z-[-2]  h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

                </div> */}
                {/* <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> */}

            </div>


            <div className="container mx-auto px-8">
                <Navber></Navber>

                <Outlet></Outlet>

                <Footer></Footer>
            </div>






        </div>
    );
};

export default Root;