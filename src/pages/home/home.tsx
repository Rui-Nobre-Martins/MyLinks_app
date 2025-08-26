import { useState, useEffect } from "react"
import { Social } from "../../components/social/social"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { db } from "../../service/firebaseConnection"
import {
    getDocs,
    collection,
    orderBy,
    query,
    doc,
    getDoc
} from 'firebase/firestore'


interface LinkProps{
    id: string,
    name: string,
    url: string,
    bg:string,
    color: string
}

interface SocialLinksProps{
    linkedin: string;
    github: string;
}

export function Home(){

    const [links, setLinks] = useState<LinkProps[]>([]);
    const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

    useEffect(()=> {
        function loadLinks(){
            const linksRef = collection (db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))

            getDocs(queryRef) 
            .then((snapshot)=>{
                let list = [] as LinkProps[];

                snapshot.forEach((doc)=>{
                    list.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        bg: doc.data().bg,
                        color: doc.data().color
                    })
                })

                setLinks(list);
            })
        }
        loadLinks();
    }, [])

    useEffect(() => {
        function loadSocialLinks(){
            const docRef = doc(db, "social", "links")

            getDoc(docRef)
            .then((snapshot)=>{
                if(snapshot.data() !== undefined){
                    setSocialLinks({
                        linkedin: snapshot.data()?.linkedin,
                        github: snapshot.data()?.github
                    })
                }
            })
        }
        loadSocialLinks();
    }, [])

    return(
        <>
        <div className="w-full flex flex-col justify-center items-center py-4">
            <h1 className="md:text-4xl text-white text-3xl font-bold mt-20">
                My Links App
            </h1>
            <span className="text-green-50 mb-5 mt-4">
                👇 See all my links 👇
            </span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                {links.map((link)=> (
                    <section 
                    style={{backgroundColor: link.bg}}
                    key={link.id}
                    className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-x-105 cursor-pointer">
                    <a href={link.url} target="_blank">
                        <p 
                        style={{color: link.color}}
                        className="md:text-lg text-base">
                            {link.name}
                        </p>
                    </a>
                </section>
                ))}

                {socialLinks && Object.keys(socialLinks).length > 0 &&(
                    <footer className="flex justify-center gap-3 my-4">
                    <Social url={socialLinks?.linkedin}>
                        <FaLinkedin size={35} color="#fff"  className="transition-transform hover:scale-y-105"/>
                    </Social>

                    <Social url={socialLinks?.github}>
                        <FaGithub size={35} color="#fff" className="transition-transform hover:scale-y-105"/>
                    </Social>
                </footer>
                )}
            </main>
        </div>
        
        </>
    )
}