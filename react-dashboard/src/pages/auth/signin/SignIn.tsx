import { Box } from "@mui/material";
import {useSession} from "next-auth/react";
import Login from "@component/component/login";
const SignIn = () => {
    const {data:session} = useSession();
    return(
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignContent:'center'
        }}>
            <h2>{ session ? "Thank you for Logged In!" : "Please Login!"}</h2>
            <Login/>
        </Box>
    )
};

export default SignIn;