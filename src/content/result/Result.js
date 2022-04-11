import React from 'react'
import {Link} from 'react-router-dom'
// import style from './result.module.css'
import CarCard from './CarCard'
import './Result.css'

const movieId ={
    'A New Hope':1,
    'The Empire Strikes Back':2,
    'Return of the Jedi':3,
    'The Phantom Menace':4,
    'Attack of thr Clones':5,
    'Revenge of the Sith':6,
}

const Result = (props) => {
    return(
        // <>
        // <div className="">
        //     {props.carList.length <= 0 && <h4>No cars at the moment</h4>}
        //     {props.carList.length > 0 && props.carList.map((car, index) => {
        //         return (
        //            <Link to={`/car/${car.id}`}> <CarCard car={car}key={index}/></Link>
        //         )
        //     })}
        // </div>
        // </>
        <>
        <section class="py-1">
                <div id='cards' class="container px-3 my-5">
                        <CarCard />
                        <CarCard />
                        <CarCard />
                        <CarCard />
                </div>
            </section>
        </>
    )
}
export default Result