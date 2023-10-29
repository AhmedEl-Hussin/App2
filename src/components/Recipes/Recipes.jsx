
import React, { useEffect, useState } from 'react'
import styles from "./recipes.module.css"
import axios from 'axios'

export default function Recipes() {

    let [meals , setMeals] = useState([]);

    let getApi = async ()=> {
        let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
        setMeals(data.meals);
        // console.log(meals);
    }

    useEffect(()=> {
        getApi();
    })

    return (
        <>
            <section id={styles.Recipes}> 

                <h2 className={`text-center  pb-4 ${styles.recipesTitle} `}>RECIPES</h2>

                <div className='container w-75'>

                    <div className='row'>

                        {meals.slice(0,3).map((meal)=>

                            <div className='col-xl-4 col-lg-4 col-md-12'>
                                <div className={`rounded-4 ${styles.recipe} `}>

                                    <div className={styles.divImag}>
                                        <img className='w-100 h-100 rounded-top-4' src={meal.strMealThumb} alt="" />
                                    </div>

                                    <div className='px-4'>
                                        <h3 className= {`my-2 ${styles.title} `} > {meal.strMeal} </h3>
                                        <p className='pb-4' >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Delectus incidunt odit itaque porro voluptas libero enim 
                                            aliquam tenetur et, numquam nulla laudantium 
                                        </p>
                                    </div>

                                </div>
                            </div>

                        )}

                    </div>

                    <div className='text-center mt-5'>
                        <button className='btn btn-warning text-white px-4 rounded-4'> CONTACT US</button>
                    </div>

                </div>

            </section>


        </>
    )
}



// import React, { Component } from 'react'
// import styles from './recipes.module.css'
// import image from "../../components/photo/2.jpeg" 

// export default class Recipes extends Component {
//   render() {
//     return (

//         <>
//             <h1 className='text-center text-warning fs-1 fw-bold'>Recipes</h1>

//             <div className='container  py-5'>
//                 <div className='row'>

//                     <div className='col-md-4'>
//                         <div className='border border-3 border-warning-subtle rounded'>
//                             <img className='w-100 h-50 rounded' src={image} alt="" />
//                             <div className='p-3'>
//                             <h6>image name</h6>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur dicta dolores totam quos, inventore quam natus corrupti cum laboriosam?</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='col-md-4'>
//                         <div className='border border-3 border-warning-subtle rounded'>
//                             <img className='w-100 h-50 rounded' src={image} alt="" />
//                             <div className='p-3'>
//                             <h6>image name</h6>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur dicta dolores totam quos, inventore quam natus corrupti cum laboriosam?</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='col-md-4'>
//                         <div className='border border-3 border-warning-subtle rounded'>
//                             <img className='w-100 h-50 rounded' src={image} alt="" />
//                             <div className='p-3'>
//                             <h6>image name</h6>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur dicta dolores totam quos, inventore quam natus corrupti cum laboriosam?</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <div className='text-center'>
//                     <button className='btn btn-warning mt-5 '>Contact us</button>
//                 </div>


//             </div>

//         </>
//     )
//   }
// }
