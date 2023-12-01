import {useSession, signIn,signOut} from "next-auth/react";
import Button from "@mui/material/Button"
import React from "react";
const Login:React.FunctionComponent = function(){
    const {data : session} = useSession();
 


    if(session){
        return <>
         <Button variant="contained" color="error" onClick={() => signOut()}> Sign out </Button>
        </>
    }
    return<>
        <Button variant="contained" color="success" onClick={() => signIn()}> Sign In </Button>
    </>
}

export default Login;