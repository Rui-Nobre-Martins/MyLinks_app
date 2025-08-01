import { useState, type FormEvent } from "react";

import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";

import { FiTrash } from "react-icons/fi";
import { db } from "../../service/firebaseConnection";
import { 
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc
} from "firebase/firestore"


export function Admin(){

    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [textColorInput, setTextColorInput] = useState("#f1f1f1")
    const [backgroundColorInput, setBackgroundColorInput] = useState("#121212")

    async function handleRegister(e: FormEvent){
        e.preventDefault();

        alert("teste")
    }

    return(
        <>
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form onSubmit={handleRegister}
            className="flex flex-col mt-8 mb-3 w-full max-w-xl">
                <label className="text-white font-medium mt-2 mb-2">Link name</label>
                <Input
                placeholder="Link"
                value={nameInput}
                onChange={(e)=> setNameInput(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Url</label>
                <Input
                type="url"
                placeholder="URL"
                value={urlInput}
                onChange={(e)=> setUrlInput(e.target.value)}
                />

                <section className="flex my-4 gap-5">
                    <div className="flex items-center gap-2">
                    <label className="text-white font-medium mt-2 mb-2 gap-3">Text color</label>
                    <input type="color"
                    value={textColorInput} 
                    onChange={(e)=> setTextColorInput(e.target.value)}/>
                    </div>

                    <div className="flex items-center gap-2">
                    <label className="text-white font-medium mt-2 mb-2">Background color</label>
                    <input type="color"
                    value={backgroundColorInput} 
                    onChange={(e)=> setBackgroundColorInput(e.target.value)}/>
                    </div>
                </section>

                {nameInput !== '' &&(
                    <div className="flex items-center justify-center flex-col mt-7 p-1 border-gray-100/25 border rounded-md">
                    <label className="text-white font-medium mt-2 mb-3">Preview</label>
                    <article className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                    style={{marginBottom:8 , marginTop: 8, backgroundColor: backgroundColorInput}}
                    >
                        <p
                        className="font-medium"
                        style={{color: textColorInput}}
                        >{nameInput}</p>
                    </article>
                </div>
                )}

                <button type="submit" className="bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center mt-7 mb-7 cursor-pointer">
                    Register
                </button>
            </form>

            <h2 className="font-bold text-white mb-4 text-2xl">
                My Links
            </h2>

            <article 
            className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
            style={{backgroundColor: "#2563EB", color:"#FFF"}}
            >
                
                <p>Linkedin</p>
                <div>
                    <button
                    className="border border-dashed p-1 rounded cursor-pointer"
                    >
                        <FiTrash size={18} color="#fff"/>
                    </button>
                    
                </div>
            </article>
        </div>
        </>
    )
}