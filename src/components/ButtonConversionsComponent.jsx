import { useEffect } from "react";
import style from "../assets/styles/style.module.css";
export const ButtonConversionsComponent = ({
    model,
    setColorModel,
    colorHexa,
    selectedModel,
    setSelectedModel,
}) => {
    /* conversion a modelos RGB - CMYK  */

    /* De Hexa a decimal = RGB */
    const red = parseInt(colorHexa[1] + colorHexa[2], 16);
    const green = parseInt(colorHexa[3] + colorHexa[4], 16);
    const blue = parseInt(colorHexa[5] + colorHexa[6], 16);

    const colorRGB = `rgb(${red}, ${green}, ${blue})`;

    /* de RGB a CMYK */
    let c = 1 - red / 255;
    let m = 1 - green / 255;
    let y = 1 - blue / 255;
    let k = Math.min(c, m, y);
    if (k === 1) {
        /*  esto por que si k es 1 quiere decir que k es negro puro y significa que los tres colores principales restantes son 0 ya que el color final es 0 */
        c = m = y = 0;
    } else {
        /*de lo contrario k es un negro puro y eso quiere decir que los demas colores principales se han mezclado, de esta forma c,m,y se recalcula dando un color que mezcla k   */
        c = Math.round(((c - k) / (1 - k)) * 100);
        m = Math.round(((m - k) / (1 - k)) * 100);
        y = Math.round(((y - k) / (1 - k)) * 100);
        k = Math.round(k * 100);
    }

    const colorCMYK = `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;

    const onHandleConversion = (model) => {
        if (model === "Hexa") {
            setSelectedModel("Hexa");
            setColorModel(colorHexa);
            console.log("hola");
            return;
        }

        if (model === "CMYK") {
            setSelectedModel("CMYK");
            setColorModel(colorCMYK);
        } else {
            setSelectedModel("RGB");
            setColorModel(colorRGB);
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
