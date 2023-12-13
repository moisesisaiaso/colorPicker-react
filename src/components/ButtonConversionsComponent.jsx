import { useEffect, useState } from "react";
import style from "../assets/styles/style.module.css";
export const ButtonConversionsComponent = ({
    model,
    setColorModel,
    colorHexa,
    selectedModel,
    setSelectedModel,
}) => {
    /* conversion a modelos RGB - CMYK  */
    useEffect(() => {
        /* esto permite que siempre que se utilice el cuenta gotas por defecto pinte el color en Hexadecimal, ya que al utilizar el cuenta gotas estoy recien obteniendo el color para luego porder hacer las conversiones a los distintos modelos si así se requiere */
        setSelectedModel("Hexa");
        setColorModel(colorHexa);
    }, [colorHexa]);

    const onHandleConversion = (model) => {
        if (model === "Hexa") {
            setSelectedModel("Hexa");
            setColorModel(colorHexa);
            console.log("hola");
            return;
        }

        if (model === "CMYK") {
            setSelectedModel("CMYK");
        } else {
            setSelectedModel("RGB");
        }
    };

    return (
        <>
            {/* Este renderizado opcional simplemente es por las clases, como en css module no se puede simplemente aplicar el operador ternario directamente a las clases, si el boton corresponde al modelo seleccionado aplica una clase, de lo contrario a plica otra */}
            {model === selectedModel ? (
                <button
                    className={style.action__btn_selected}
                    onClick={() => onHandleConversion(model)}
                >
                    {model}
                </button>
            ) : (
                <button
                    className={style.action__btn + " " + style.action__btn_models}
                    onClick={() => onHandleConversion(model)}
                >
                    {model}
                </button>
            )}
        </>
    );
};
