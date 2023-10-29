import React from 'react'
import styles from "./work.module.css"
import work1 from "../../photo/work1.png"
import work2 from "../../photo/work2.png"
import work3 from "../../photo/work3.png"
import work4 from "../../photo/work4.png"


export default function Work() {
  return (

    <>

        <section id={styles.work}>

            <div className={styles.bgWork}></div>

            <div className='container w-75'>

                <div className={`${styles.captionWork}`}>

                    <div className={`row pt-5`}>

                        <div className='col-xl-3 col-lg-3 col-md-12'>
                            <div className={` ${styles.par}`}>
                                <p className='pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, mollitia nemo beatae minima modi illum sint enim eligendi distinctio quis?</p>
                            </div>
                        </div>

                        <div className='col-xl-9 col-lg-9 col-md-12'>
                            <div className=' pe-5'>
                                <h2 className={styles.workTitle}>HOW WE <br/> WORK</h2>
                            </div>
                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-xl-3 col-lg-3 col-md-6 col-x-12'>
                            <div className=' rounded-4'>
                                <img className='w-100 rounded-4' src={work4} alt="" />
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-3 col-md-6 col-x-12'>
                            <div className=' rounded-4'>
                                <img className='w-100 rounded-4' src={work3} alt="" />
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-3 col-md-6 col-x-12'>
                            <div className=' rounded-4'>
                                <img className='w-100 rounded-4' src={work2} alt="" />
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-3 col-md-6 col-x-12'>
                            <div className=' rounded-4'>
                                <img className='w-100 rounded-4' src={work1} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className='text-center mt-5'>
                        <button className='btn btn-warning text-white px-4 rounded-4'> CONTACT US</button>
                    </div>


                </div>

            </div>

        </section>

    </>
  )
}
