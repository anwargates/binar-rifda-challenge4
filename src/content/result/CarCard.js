import React from 'react'
import './Result.css'
import CarDetail from './CarDetail'
// import style from './result.module.css'

const CarCard =(props) => {
    return (
        <>
        <div className="card">
            <div class="card-body">
                <h5 class="card-title">
                    <img src="./assets/fi_car.png" alt="img-car"/>
                </h5>
                <p>Nama/Tipe Mobil</p>
                <h6>Rp 430.000 / hari</h6>
                <p class="card-text">
                    <img src="./assets/fi_key.png" alt="icon-key"/>Start rent - Finish rent
                </p>
                <p class="card-text">
                    <img src="./assets/fi_clock.png " alt="icon-clock"/>Updated at 4 Apr 2022, 09.00
                </p>
                <div class="btn-group" aria-label="Basic example">
                    <button type="button" class="btn btn-danger">
                        <img src="./assets/fi_trash-2.png" alt="icon-trash"/>Delete
                    </button>
                    <button type="button" class="btn btn-success">
                        <img src="./assets/fi_edit.png" alt="icon-edit"/>Edit
                    </button>
                </div>
            </div>
        {/* <CarDetail label="" value={props.car.name}/>
        <CarDetail label="Rp. " value={props.car.price}/>
        <CarDetail label="" value={props.car.passenger}/>
        <CarDetail label="" value={props.car.director}/>
        <CarDetail label="" value={props.car.producer} /> */}
        
    </div>
        </>
    
    )
}

export default CarCard