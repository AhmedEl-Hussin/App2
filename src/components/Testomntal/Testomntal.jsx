import React, { Component } from 'react'
import styles from './Testomntal.module.css'

export default class Testomntal extends Component {
  render() {
    return (

        <>

            <section id= {styles.testomntal}>

                <h1 className= {styles.testomntalTitle}>TESTYMONIAALS</h1>

                <div className='container w-75'>
                    <div className='row g-4'>

                        <div className='col-xl-6 col-lg-6 col-md-12 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className= {styles.mergColor}>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>     
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>                      
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className= {styles.mergColor}>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>     
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>                      
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className= {styles.mergColor}>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>     
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>                      
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className= {styles.mergColor}>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>     
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>                      
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.mergColor} `} ></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='text-center mt-5'>
                    <button className='btn btn-warning text-white px-4 rounded-4'> CONTACT US</button>
                </div>


            </section>

            {/* <section className='w-100 bg-danger text-white  py-5'>

                <h1 className='fw-bold fs-1 text-center'>TESTYMONIAALS</h1>

                <div className='container mt-5'>
                    <div className='row gy-3'>

                        <div className='col-md-6 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className='text-warning'>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>     
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>                      
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className='text-warning'>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>     
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>                      
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className='text-warning'>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>     
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>                      
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 '>
                            <div className='bg-white px-5 py-3 rounded-5'>
                                <h5 className='text-warning'>Kathryn Murphy</h5>
                                <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ut corporis aliquid repellendus aspernatur mollitia libero, nihil placeat? Perferendis, sit?</p>

                                <div className='mt-3'>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>     
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>                      
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                <i class="fa-solid text-warning ms-1 fa-star"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='text-center'>
                    <button className='btn btn-warning mt-5 '>Contact us</button>
                </div>

            </section> */}

        </>
    )
  }
}
