import { useState,useCallback } from "react";

type ToggleIprops = [boolean, () => void]

const useToggle= (intialState = false):ToggleIprops => {

    const [mode,setMode] = useState(intialState);
    const toggle = useCallback(() => {
            setMode(prev => !prev)
    },[mode]);
    return [mode,toggle]

}

export  default useToggle;