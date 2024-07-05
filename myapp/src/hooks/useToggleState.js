import { useState } from "react";
function useToggle(initialVal=false){
    //calluseState, "reserve piece of state"
    const [state,setState] =  useState(initialVal);
    const toggle= ()=>{
        setState(!state);
    };
    //return piece of state  AND a function to togglenit
    return [state,toggle];
}
export default useToggle;