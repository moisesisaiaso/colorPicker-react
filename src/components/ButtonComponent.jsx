import style from "../assets/styles/style.module.css";

export const ButtonComponent = ({ setColor }) => {
    const colorPicker = async () => {
        if (!window.EyeDropper) {
            setColor("Tu navegador no soporta la API de EyeDropper");
            return;
        }

        const eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();

        const hexResult = sRGBHex.toUpperCase();
        setColor(hexResult);
    };
    return (
        <>
            <button className={style.action__btn} onClick={colorPicker}>
                Pick Color
            </button>
        </>
    );
};
