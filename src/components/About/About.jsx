import React from 'react'
import styles from './about.module.css'
import cooker from "../../photo/cooker.png"


export default function About() {
  return (

    <>

        <section id={styles.About}>

            <div className={styles.bgAbout}></div>

            <div className='container w-75'>

                <div className={`row gy-4 mt-5 ${styles.aboutCaption}`}>

                    <div className='col-xl-6 col-lg-6 col-md-12'>
                        <div className=' text-white'>
                            <h2 className={styles.aboutTitle}>ABOUT <br /> US</h2>
                            <p className='pe-5 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> 
                                Iusto animi eum aliquam ullam hic possimus, necessitatibus repudiandae, tenetur, 
                                at vel consequatur reiciendis repellat rerum ducimus! Rem, ducimus facere placeat 
                                cum modi atque vitae minima? Blanditiis soluta sapiente nisi, assumenda quibusdam 
                                dignissimos placeat laboriosam ratione est eveniet autem! Minima rerum totam dolores 
                                nesciunt corrupti doloremque expedita! Atque fugit iste voluptates, voluptatibus velit 
                                nemo obcaecati quaerat provident veniam vel excepturi sunt hic!
                            </p>
                            <button className='btn btn-warning text-white mt-4 rounded-4'>CONTACT US</button>
                        </div>
                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-12'>
                        <div className=''>
                            <img className='w-100 rounde-5' src={cooker} alt="" />
                        </div>
                    </div>


                </div>

            </div>

        </section>


    </>
  )
}
