import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18n
.use(languageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:"en",
    returnObjects:true,
    resources:{
        en:{
translation:{
    geetring:"welcome to react",
    discption:{
        line1:"this is a simple react app and  we are using i18next for translation and material ui for designing the app",
    line2:"we are also using bootstarp for designing the app"
    }
}

        },
        ar:{
            translation:{
                geetring:"khosh amded",
                discption:{
                    line1:"هذا نموذج من التصحيح ونحن نستخدم 18nesht للترجمة والمواد التي قمنا بإعدادها للتصميم",
                line2:"نحن نستخدم أيضًا bootstrap للتصميم"
                }
            }
        },
        fr:{
            translation:{
                geetring:"bhale kary aaya ",
                discption:{
                    line1:"Il s'agit d'un exemple correct et nous utilisons 18 nids pour la traduction et le matériel que nous avons conçu pour la conception.",
                // line2:"Nous utilisons également bootstrap pour concevoir"
                }
            }
        }

    }
})
