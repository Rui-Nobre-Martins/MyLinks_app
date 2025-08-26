import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <div className="flex w-full justify-center items-center flex-col text-white min-h-screen">
            <h1 className="font-bold text-4xl mb-4">
                Page Not Found 
            </h1>

        <Link 
        className=" bg-gray-50/20 py-1 px-4 rounded-md"
        to="/">
            Return to homepage
        </Link>
        </div>
    )
}