import { useState } from "react";
import style from "./assets/styles/style.module.css";
import image from "./assets/img/hogar.jpg";
import { ButtonComponent } from "./components/ButtonComponent";
import { colorName } from "./helpers/colorName.js";

function App() {
    const [color, setColor] = useState(null);

    const name = colorName[color];
    console.log(name);

    if (color && colorName[color]) {
        const name = colorName[color];
        console.log(name);
    }

    return (
        <>
            <section className={style.container}>
                <h1 className={style.container__title}>COLOR PICKER</h1>

                <div className={style.container__image}>
                    <img src={image} alt="image" className={style.image__img} />
                </div>

                <div className={style.container__action}>
                    <ButtonComponent setColor={setColor} />
                    <p className={style.action__result_container}>
                        <span
                            className={style.action__result_box}
                            style={{ backgroundColor: color }}
                        ></span>
                        <span className={style.action__result}>{color}</span>
                    </p>
                </div>
            </section>
        </>
    );
}

export default App;
