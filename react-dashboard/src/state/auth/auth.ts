import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthIProps } from "./authType";

export const useAuth = create<AuthIProps>()(
  devtools(
    persist(
      (set) => ({
        userName: "",
        img: "",
        addProfile: (user,img) =>
          set(() => ({
            userName: user,
            img: img,
          })),
          removeProfile:() =>
            set(() => ({
                userName:"",
                img:""
            })),
      }),
      { name: "authStore" }
    )
  )
);
