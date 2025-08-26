import { useState, type FormEvent, useEffect } from "react";

import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";

import { db } from "../../service/firebaseConnection";
import {
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore'

export function Networks(){

    const [linkedin , setLinkedin] = useState("");
    const [github, setGitHub] = useState("");

    useEffect(() =>{
        function loadLinks(){
            const docRef = doc(db, "social", "links")
            getDoc(docRef)
            .then((snapshot) =>{
                if(snapshot.data() !== undefined){
                    setLinkedin(snapshot.data()?.linkedin)
                    setGitHub(snapshot.data()?.github)
                }
            })
        }

        loadLinks();
    }, [])

    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, "social", "links"),{
            linkedin: linkedin,
            github: github
        })
        .then(()=>{
            console.log("Success")
        })
        .catch((error)=>{
            console.log("ERROR" + error)
        })
    }

    return(
        <>
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">
                Social Media Page
            </h1>

            <form 
            className="flex flex-col max-w-xl w-full"
            onSubmit={handleRegister}
            >
                <label className="text-white font-medium mt-2 mb-2">Linkedin Link</label>
                <Input
                    placeholder="Linkedin Url"
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">GitHub Link</label>
                <Input
                    placeholder="GitHub Url"
                    type="url"
                    value={github}
                    onChange={(e) => setGitHub(e.target.value)}
                />

                <button 
                type="submit"
                className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-bold cursor-pointer"
                >
                    Save
                </button>
            </form>
        </div>
        </>
    )
}