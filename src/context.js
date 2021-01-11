import React, { createContext, useContext, useState } from "react";

export const LangContext = createContext();

const Lang = ({defaultLang, children, translations}) => {
    const [lang, setLang] = useState(defaultLang);
    const amazingTranstlate = text => {
        if(lang === defaultLang) {
            return text;
        }else{
            return translations[lang][text];
        }
    };
    return (<LangContext.Provider value ={{ setLang, t: amazingTranstlate }}>
        {children}
        </LangContext.Provider>
    )
}

export const useSetLang = () => {
    const {setLang} = useContext(LangContext);
    return setLang;
}

export const useT = () => {
    const { t } = useContext(LangContext)
    return t;
}

export default Lang;