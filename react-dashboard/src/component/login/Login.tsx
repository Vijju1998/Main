import {useSession, signIn,signOut} from "next-auth/react";
import Button from "@mui/material/Button"
import React from "react";
//import { useAuth } from "@component/state/auth";
const Login:React.FunctionComponent = function(){
    const {data : session} = useSession();
   // const {addProfile,removeProfile} = useAuth();
 


    if(session){
        return <>
         Signed in as a {session?.user?.email}<br/>
         <Button variant="contained" color="error" onClick={() => signOut()}> Sign out </Button>
        </>
    }
    return<>
        <h2>Please Login</h2><br/>
        <Button variant="contained" color="success" onClick={() => signIn()}> Sign In </Button>
    </>
}

export default Login;