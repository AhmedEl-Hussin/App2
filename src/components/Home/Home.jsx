import React from 'react'
import styles from "./home.module.css"
import logo from "../../photo/logo.png"
import bred from "../../photo/bred.png"
import quality from "../../photo/quality.png"
import text from "../../photo/text.png"



export default function Home() {
    return (

    <>
        <section id= {styles.Home}>

            <div className= {styles.baCaption}></div>

            <div className='container  w-75 caption'>

                <div className={`row gx-0 py-4  ${styles.caption}`}>

                    <div className='col-xl-6 col-lg-6 col-md-12'>
                        <div className=''>

                            <div className='d-flex'>
                                <img className={styles.logo } src={logo} alt="logo...." />
                                <span className='ms-2 fw-bold text-white'>PEACHY PUP <br/>  BAKERY </span>               
                            </div>     
                            
                            <div className={` text-white ${styles.cptionText} `}>
                                <h1 className={styles.captionTitle}>TASTY PASTRIES</h1>
                                <p className='my-4 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Error eius,  quas pariatur impedit quasi aliquam<br/> numquam quia amet labore quaerat.</p>
                                <button className={`btn btn-warning text-white px-4 rounded-4`}>SEE MORE</button>
                            </div>        
                        </div>
                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-12'>
                        <div className=''>

                            <div className={` ${styles.captionImag}`}>
                                <img className={styles.imgBred} src={bred} alt="" />
                                <img className={styles.imgQuality} src={quality} alt="" />
                                <img className={styles.imgText} src={text} alt="" />
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "d-flex">

                    <div className={styles.icons}>
                        <i class={`fa-brands ${styles.icon} fa-vk `}></i> <br/>                    
                        <i class={`fa-brands ${styles.icon} fa-square-facebook`}></i> <br/>
                        <i class={`fa-brands ${styles.icon} fa-square-instagram`}></i> <br/>
                        <i class={`fa-brands ${styles.icon} fa-twitter`}></i>
                    </div>

                <div className={styles.captionFooter}>
                    <p className={styles.par}>Telephone: +7 700 000 00 00</p>
                </div>

                </div>


            </div>

        </section>
    </>
    )
}
