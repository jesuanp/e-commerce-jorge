import React from "react";
import s from './productos.module.css';
import img4 from '../../images/image4.jpg';
import gifRegresoAClases from '../../images/image-regreso-a-clases.gif';
import img13 from '../../images/image13.jpg';
import img14 from '../../images/image14.jpg';
import { NavLink } from "react-router-dom";


export default function Productos() {

    return (
        <div className={s.container}>

            <div className={s.section}>
                <div className={s.containerImg}>
                    <img className={s.imgShoes} src={gifRegresoAClases} alt='gis regreso a clases' />
                    <NavLink to='/zapato'>
                        <button className={`${s.btnVerMas} ${s.absoliteLeft}`}>VER MÁS</button>
                    </NavLink>
                </div>

                <div className={s.containerImg}>
                    <div className={s.containerImg}>
                        <img className={s.imgShoes} src={img14} alt='image 13 zapatos' />
                        <NavLink to='/zapato'>
                            <button className={s.btnVerMas}>VER MÁS</button>
                        </NavLink>
                    </div>
                    <div className={s.divText}>
                        <span>Tenis para hombres estilo Sport Runner</span>
                        <br/>
                        <span style={{fontSize: '1.2rem', color: 'rgb(201, 131, 0)'}}>152.900 COP</span>
                    </div>
                </div>
                
            </div>

            <div className={s.section}>
                <div className={s.containerImg}>
                    <strong className={s.textImage}>
                        <span>NUEVOS ESTILOS DE</span>
                        <br/>
                        <span style={{fontSize: '4rem'}}>TENIS</span>
                    </strong>

                    <img className={s.imgShoes} src={img4} alt='sneakers new' />
                    <NavLink to='/zapato'>
                        <button style={{top: '7rem', bottom: 'auto'}} className={`${s.btnVerMas} ${s.absoliteLeft}`}>VER MÁS</button>
                    </NavLink>
                </div>

                <div className={s.containerImg}>
                    <img className={s.imgShoes} src={img13} alt='gis Nuestros Articulos' />
                    <NavLink to='/zapato'>
                        <button className={s.btnVerMas}>VER MÁS</button>
                    </NavLink>
                </div>
            </div>


        </div>
    )
}