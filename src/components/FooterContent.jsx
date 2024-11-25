import React from "react";
import style from "../assets/styles/style.module.css";

import telephone from "../assets/icons/telephone.png";
import question from "../assets/icons/question.png";
import cmyk from "../assets/icons/cmyk.png";
import email from "../assets/icons/email.png";
import code from "../assets/icons/code.png";
import hexa from "../assets/icons/security.png";
import rgb from "../assets/icons/rgb.png";

export const FooterContent = () => {
    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.footerInfo}>
                    <img src={question} alt="" />
                    {/* contactame */}
                    <div className={style.contact} style={{ left: "1.5rem", width: "28rem" }}>
                        <h2>¿Qué puedo hacer?</h2>
                        <p style={{ fontSize: "15px" }}>
                            Esta aplicación es especialmente útil para diseñadores de interfaces
                            web, móviles y de escritorio que necesitan
                            <span className={style.subrayar}>seleccionar colores</span>, como en
                            editores de imágenes o herramientas de diseño gráfico.
                        </p>
                        <br />
                        <p style={{ fontSize: "15px" }}>
                            Si utilizas varias
                            <span className={style.subrayar}>pantallas extendidas</span>, podrás
                            desplazarte con el selector tanto dentro como fuera del navegador para
                            seleccionar el color de
                            <span className={style.subrayar}>cualquier imagen</span>.
                        </p>
                        <h3>Formatos compatibles: </h3>
                        <div>
                            <img src={hexa} alt="" />
                            <span>
                                <span className={style.contact_formatos}>Hexadecimal:</span> #2E415E
                            </span>
                        </div>
                        <div>
                            <img src={cmyk} alt="" />
                            <span>
                                <span className={style.contact_formatos}> CMYK:</span> cmyk(51%,
                                31%, 0%, 63%)
                            </span>
                        </div>
                        <div>
                            <img src={rgb} alt="" />
                            <span>
                                <span className={style.contact_formatos}> RGB:</span> rgb(46, 65,
                                94)
                            </span>
                        </div>
                    </div>
                </div>
                <h5>&copy; DESARROLLADO POR MOISES ISAIAS ORTIZ GRACIA</h5>
                <div className={style.footerInfo}>
                    <img src={code} alt="" />
                    {/* contactame */}
                    <div className={style.contact}>
                        <h2>Contáctame</h2>
                        <div>
                            <img src={telephone} alt="" />
                            <span>(+593) 096 971 8160</span>
                        </div>
                        <div>
                            <img src={email} alt="" />
                            <span>moises.ortiz@utelvt.edu.ec</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
