import style from "../assets/styles/style.module.css";
import camaraIcon from "../assets/img/subir6.png";
import { useRef } from "react";
export const ButtonImageComponent = ({ setUploadImage }) => {
    const input = useRef();

    const handleFileLoad = (e) => {
        const contents = e.target.result;
        setUploadImage(contents);
    };

    const getFile = () => {
        const file = input.current.files[0];
        const reader = new FileReader();
        reader.onload = handleFileLoad;

        reader.readAsDataURL(file);
    };

    return (
        <>
            <div className={style.image__button}>
                <img src={camaraIcon} alt="" className={style.button__img} />
                <input type="file" onChange={getFile} ref={input} className={style.image__input} />
            </div>
        </>
    );
};
