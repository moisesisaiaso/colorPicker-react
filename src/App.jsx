import { useEffect, useRef, useState } from "react";
import style from "./assets/styles/style.module.css";
import image from "./assets/img/hogar.jpg";
import { ButtonSelectorComponent } from "./components/ButtonSelectorComponent";
import { Helmet } from "react-helmet";
import { ButtonConversionsComponent } from "./components/ButtonConversionsComponent";

const models = ["Hexa", "CMYK", "RGB"];
function App() {
    const [colorHexa, setColorHexa] = useState(null);
    const [colorModel, setColorModel] = useState(null);
    const [selectedModel, setSelectedModel] = useState("Hexa");
    const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
    const [colorName, setColorName] = useState("");

    const portaPapel = useRef(null);

    /*  const hexaCorto = colorModel.slice(1, colorModel.length);
    console.log(hexaCorto); */

    /* POPUP movimiento*/
    const onHandleMouse = (event) => {
        setPositionMouse({ x: event.clientX, y: event.clientY });

        console.log(positionMouse);
    };

    /* Nombre del color */
    useEffect(() => {
        if (colorHexa) {
            let ntcArray = ntc.name(colorHexa);
            const [, name, coincidencia] = ntcArray;
            console.log("coincidencia: " + coincidencia);
            setColorName(name);
            console.log(name);
        }
    }, [colorHexa]);

    /* Copiar al portapapel elemento seleccionado 
    con execCommand()*/
    const onHandleCopy = () => {
        portaPapel.current.select();
        document.execCommand("copy");
    };

    return (
        <>
            <Helmet>
                <script type="text/javascript" src="https://chir.ag/projects/ntc/ntc.js"></script>
            </Helmet>
            <section className={style.container}>
                <header className={style.container__header}>
                    <h1 className={style.container__title}>COLOR PICKER</h1>
                </header>

                <main className={style.container__main}>
                    <div className={style.main__image}>
                        <img src={image} alt="image" className={style.image__img} />
                    </div>

                    <div className={style.main__action}>
                        <ButtonSelectorComponent setColorHexa={setColorHexa} />

                        {/* mientras colorHexa sea false entonces no me renderices esto */}
                        {colorModel && (
                            <>
                                <div
                                    className={style.action__result_container}
                                    onMouseMove={onHandleMouse}
                                >
                                    {/* color de caja*/}
                                    <span
                                        className={style.action__result_box}
                                        style={{ backgroundColor: colorHexa }}
                                    ></span>

                                    {/* resultado hexa */}
                                    <a href="#" onClick={onHandleCopy}>
                                        <span className={style.action__result}>{colorModel}</span>
                                        {/* textarea para almacenar, seleccionar y copiar el valor  */}
                                        <textarea
                                            ref={portaPapel}
                                            name=""
                                            id="textarea"
                                            cols="30"
                                            rows="10"
                                            value={colorModel}
                                            style={{
                                                opacity: "0",
                                                position: "absolute",
                                                zIndex: "1",
                                                width: "2rem",
                                                height: "2rem",
                                                top: "0",
                                            }}
                                        ></textarea>
                                    </a>

                                    {/* Popup */}
                                    <div
                                        className={style.action__popup}
                                        style={{
                                            left: `${positionMouse.x + 10}px`,
                                            top: `${positionMouse.y + 10}px`,
                                        }}
                                    >
                                        {colorName}
                                    </div>

                                    {/* lef y top corresponde a (x,y) como si fuera un vector en el plano carteciano, de esta manera estoy dando las cordenadas para el popup */}
                                    {/* se utiliza left y top para establecer los valores de coordenada por que el valor que la coordenada left va a generar espacio de hizquierda, es como si se le aplicaran margenes de ese la do así mismo en top va a dejar espacio en la parte superior lo que genera la ilusion que el popup está siendo tomado desde la esquina superior hizquierda */}
                                </div>

                                <div className={style.main__conversions}>
                                    {models.map((model, i) => (
                                        <ButtonConversionsComponent
                                            key={i}
                                            model={model}
                                            setColorModel={setColorModel}
                                            colorHexa={colorHexa}
                                            selectedModel={selectedModel}
                                            setSelectedModel={setSelectedModel}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </main>
                <footer> &copy; DESARROLADO POR MOISES ORTIZ GRACIA </footer>
            </section>
        </>
    );
}

export default App;
