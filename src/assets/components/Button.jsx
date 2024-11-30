import style from "./Button.module.css";
import languages from "../../languages";
import { useState } from "react";

export default function Button() {
    const [selectedId, setSelectedId] = useState(null);  

    // Funzione per gestire il clic su un bottone
    const handleButtonClick = (id) => {
        setSelectedId(id === selectedId ? null : id);  i
    };

    return (
        <>
            <div className={style.buttonSection}>
                {languages.map((language) => (
                    <button
                        key={language.id}
                        className={`${style.button} ${selectedId === language.id ? style.selected : "color: yellow"}`}  
                        onClick={() => handleButtonClick(language.id)}  
                    >
                        {language.title}
                    </button>
                ))}
            </div>

            <div className={style.cardSection}>
                {languages.map((language) => (
                    selectedId === language.id && (  
                        <div key={language.id} className={style.descriptionSection}>
                            <h3>{language.title}</h3>
                            <p>{language.description}</p>
                        </div>
                    )
                ))}
            </div>
        </>
    );
}
