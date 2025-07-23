import { Link } from "react-router-dom";

export function Login(){
    return(
        <>
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1>
                <Link to="/">
                    <h1 className="mt-11 text-white mb-7 font-bold text-5xl">My 
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent"> Links App</span>
                    </h1>
                </Link>
            </h1>
        </div>
        </>
    )
}