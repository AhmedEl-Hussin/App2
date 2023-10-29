import React, { Component } from 'react'
import styles from './contact.module.css'

export default class Contact extends Component {
    render() {
        return (

        <>

            <section id= {styles.contact}>

                <h1 className= {styles.contactTitle} >CONTACT US</h1>

                <div className='container w-50 '>

                    <div className='row gy-4 gx-0'>

                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className=''>

                                <input placeholder='Full Name' className= {` ${styles.inputs} rounded-4 px-3 py-2 `} type="text" />
                                <input placeholder='Email' className= {` ${styles.inputs} rounded-4 px-3 py-2 mt-3`} type="email" />
                                <input placeholder='Phone Number' className= {` ${styles.inputs} rounded-4 px-3 py-2 mt-3`} type="number" />
                                <br/>
                                <button className= {`px-5 rounded-5 mt-4 py-2 ms-5 ${styles.btns} `} >SEND</button>

                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12'>
                            <div className=''>
                                <span> <i class={`fa-solid text-warning  fa-envelope ${styles.spanIcons} `} ></i> Upskilling.egl@gmail.com</span><br></br>
                                <span> <i class= {`fa-sharp text-warning mt-4 fa-solid fa-phone  `} ></i>+201154932137</span>
                            </div>

                        </div>
                        
                    </div>

                </div>


            </section>

        </>
    )
}
}
