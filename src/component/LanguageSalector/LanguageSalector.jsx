
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import "./language.css"
import { useTranslation } from "react-i18next";


const LanguageSalector = ()=>{
    const {i18n} = useTranslation();

    const Languagechange= (lng) => {
        i18n.changeLanguage(lng);
    };
    const Languages =[
        {code:"en",lang:"English"},
        {code:"ar",lang:"abric"},
        {code:"fr",lang:"France"},
    ];
  
    useEffect(()=>{
        document.body.dir =i18n.dir();
    },[i18n.language])
    return(
        <div>
     
        {Languages.map((lng) => {
            return( 
                <button key={lng.code} className={lng.code === i18n.language ? "selected" : ""}  onClick={()=> Languagechange(lng.code)}>{lng.lang}   </button>
            );
        })}
        </div>
    );
};
export default LanguageSalector;