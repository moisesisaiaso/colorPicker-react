import style from "../assets/styles/style.module.css";

export const ButtonSelectorComponent = ({ setColorHexa }) => {
    const colorPicker = async () => {
        if (!window.EyeDropper) {
            setColorHexa("Tu navegador no soporta la API de EyeDropper");
            return;
        }

        const eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();

        const hexResult = sRGBHex.toUpperCase();
        setColorHexa(hexResult);
    };
    return (
        <>
            <button className={style.action__btn} onClick={colorPicker}>
                Pick Color
            </button>
        </>
    );
};
