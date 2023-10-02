
export interface AuthIProps{
    userName:string;
    img:string;
    addProfile:(user:string,img:string) => void;
    removeProfile:() => void;
}