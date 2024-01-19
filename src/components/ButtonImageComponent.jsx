import style from "../assets/styles/style.module.css";
import fileIcon from "../assets/img/file.png";
import { useRef, useState } from "react";
export const ButtonImageComponent = ({ setUploadImage }) => {
    const input = useRef();

    const [uploadFile, setUploadFile] = useState(null);

    const handleFileLoad = (e) => {
        const contents = e.target.result;
        setUploadImage(contents);
    };

    const getFile = () => {
        const file = input.current.files[0];
        const reader = new FileReader();
        reader.onload = handleFileLoad;

        reader.readAsDataURL(file);

        setUploadFile(file);
    };

    const sizeFile = (uploadFile?.size / 1024).toFixed(2);

    return (
        <>
            <div className={style.action__upload}>
                <div className={style.upload__inputContainer}>
                    <img src={fileIcon} alt="" className={style.upload__icon} />
                    <input
                        type="file"
                        onChange={getFile}
                        ref={input}
                        className={style.upload__input}
                    />

                    <div className={style.upload__meta}>
                        <p>Click to upload or drag and drop</p>
                        {uploadFile ? (
                            <p>
                                {uploadFile.name}, {sizeFile} KB
                            </p>
                        ) : (
                            <p>No File Selected</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

/* 
 Calculo de posición de horas, segundos y minutos mediante grados
 
 -Un circulo tiene 360 grados - el reloj en este caso será representado como este circulo donde dividimos para cada hora, minutos y segundos un segmento en grados.


 --------Horas-------

 se puede calcular la posición de la hora atravez de los grados dividimos el curculo de 360 grados para las 12horas:

 360/12 = 30

 30 representa cada segmento en grados que representa cada hora de esta forma podemos obtener la posición de la hora multiplicando la hora por el segmento (30):
 
9 x 30 = 270          --

270 es la posición en grados de la hora 9



-------Minutos y segundos-------

De igual forma los minutos se deben dividir en segmentos ya que tenemos 60min dividimos los 360 grados para los 60min

360/60 = 6 

6 es el segmento en grados que representa cada minuto, es decir si queremos saber la posición solo multiplicamos los minutos por el segmento: 

5 x 6 = 30                --

los minutis funcionan de igual forma
*/
