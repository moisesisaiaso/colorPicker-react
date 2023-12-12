import { useEffect, useState } from "react";
import style from "./assets/styles/style.module.css";
import image from "./assets/img/hogar.jpg";
import { ButtonSelectorComponent } from "./components/ButtonSelectorComponent";
import { Helmet } from "react-helmet";

function App() {
    const [color, setColor] = useState(null);
    const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
    const [colorName, setColorName] = useState("");

    /* POPUP movimiento*/
    const onHandleMouse = (event) => {
        setPositionMouse({ x: event.clientX, y: event.clientY });

        console.log(positionMouse);
    };

    /* Nombre del color */
    useEffect(() => {
        if (color) {
            let ntcArray = ntc.name(color);
            const [, name, coincidencia] = ntcArray;
            console.log("coincidencia: " + coincidencia);
            setColorName(name);
            console.log(name);
        }
    }, [color]);

    /* Copiar al portapapel elemento seleccionado 
    con execCommand()*/

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
                        <ButtonSelectorComponent setColor={setColor} />
                        <div className={style.action__result_container} onMouseMove={onHandleMouse}>
                            <span
                                className={style.action__result_box}
                                style={{ backgroundColor: color }}
                            ></span>

                            <a href="#">
                                <span className={style.action__result}>{color}</span>
                            </a>
                            <div
                                className={style.action__popup}
                                style={{
                                    left: `${positionMouse.x + 10}px`,
                                    top: `${positionMouse.y + 10}px`,
                                }}
                            >
                                {colorName}
                            </div>
                            {/* se utiliza left y top para establecer los valores de coordenada por que el valor que la coordenada left va a generar espacio de hizquierda, es como si se le aplicaran margenes de ese la do así mismo en top va a dejar espacio en la parte superior lo que genera la ilusion que el popup está siendo tomado desde la esquina superior hizquierda */}
                        </div>
                    </div>
                </main>
                <footer> &copy; DESARROLADO POR MOISES ORTIZ GRACIA </footer>
            </section>
        </>
    );
}

export default App;
