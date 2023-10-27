
export interface AuthIProps{
    user:string;
    img:string;
    loggedIn:boolean;
    userSession:(user:string,img:string) => void
}



