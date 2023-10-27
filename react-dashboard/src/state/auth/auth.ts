import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthIProps} from "./authType";
export const useAuth = create<AuthIProps>()(
  devtools(
    persist(
      (set) => ({
        user:"",
        img: "",
        loggedIn: false,
        userSession: (user:string,img:string) => set(() =>({
          user:user,
          img:img,
          loggedIn:Boolean(user),
      })),
      }),
      { name: "authStore" }
    )
  )
);
