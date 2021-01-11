import React, { createContext, useState } from "react";

export const LangContext = createContext();

const Lang = ({defaultLang, children, translations}) => {
    const [lang, setLang] = useState(defaultLang);
    return <LangContext.Provider>
        {children}
        </LangContext.Provider>
}

export default Lang;