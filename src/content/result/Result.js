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
        // <div className="">
        //     {props.movieList.length <= 0 && <h4>No movies at the moment</h4>}
        //     {props.movieList.length > 0 && props.movieList.map((movie, index) => {
        //         return (
        //            <Link to={`/movie/${movieId[movie.title]}`}> <CarCard movie={movie}key={index}/></Link>
        //         )
        //     })}
        // </div>
        <>
        <section class="py-5">
                <div id='cards' class="container px-5 my-5">
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