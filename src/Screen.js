import React from "react";
import { useSetLang, useT } from "./context";

const Screen = () => {
    const setLang = useSetLang();
    const t = useT();
    return(
        <>
        <h1>{t("안녕")}</h1>
        <h1>Hello</h1>
        <button onClick ={()=>setLang("de")}>{t("번역")}</button>
        </>
    )
} 
export default Screen;