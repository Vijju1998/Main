import { Avatar } from "@mui/material";
import {useSession, signIn,signOut} from "next-auth/react";
import { useAuth } from "@component/state/auth";
import { useEffect, useState } from "react";
interface profileProps {
    name:string;
    image:string
}
const Login = () =>{
    const {data : session} = useSession();
    const {userName,img,addProfile,removeProfile} = useAuth();
    const [profiles,setProfile] = useState<profileProps>({
        name:"",
        image:""
    });
   

    useEffect(() =>{
            setProfile({
            name:session?.user?.name as string,
            image:session?.user?.image as string
            })
    },[profiles.name,profiles.image]);
    console.log(profiles)
   const logout = () => {
        signOut();
        removeProfile();
    }

    const login = (profiles:profileProps) => {

        const {name,image} = profiles
        signIn();
        addProfile(name,image);
    }
    if(session){
        console.log("When Signed In page renders....!");
        return <>
         Signed in as a {session?.user?.email} and userName is {userName}<br/>
         <Avatar alt={userName} src={img} />
         <button onClick={() => logout()}> Sign out </button>
        </>
    }
        console.log("When Signed out page renders....!");
    return<>
        Not Signed In <br/>
        <button onClick={() => login(profiles)}> Sign In </button>
    </>
}

export default Login;