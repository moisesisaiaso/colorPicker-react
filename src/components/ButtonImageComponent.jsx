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
