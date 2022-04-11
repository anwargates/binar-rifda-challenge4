import React from 'react'
import { Link } from 'react-router-dom';
import './Result.css'
import CarDetail from './CarDetail'
// import style from './result.module.css'

const CarCard =({ listCar }) => {
    const price = (value) => {
        const format = value.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('');
        return rupiah;
    } ;
    return (
        <>
            {listCar.map((data) => (
        <>
            <div className='col-12 col-sm-12 col-lg-4'>
                <div className='card card-car m-1 p-2'>
                    <img src={data.image} className="center m-4 mt-5 img-fluid img-car" alt={data.name}/>
                    <div className="card-body">
                        <span className="d-block mb-2 list-font-type" key={data.id}>{data.name} / {data.category}</span>
                        <span className="d-block mb-2 list-font-price" key={data.id}>{price(data.price)} / hari</span>
                        <p className='list-font'> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <span className="d-block font-sidebar mb-2 " >
                            <img src="/fi_users.png" className='me-2' alt="" />
                            4 orang
                        </span>
                        <span className="d-block font-sidebar mb-2" >
                            <img src="/fi_settings.png" className='me-2' alt="" />
                            Medium
                        </span>
                        <span className="d-block font-sidebar mb-4" >
                            <img src="/fi_calendar.png" className='me-2' alt="" />
                            Tahun 2020
                        </span>
                        <Link to={`/cari_mobil/detail/${data.id}`}>
                            <button id='btn-card' className='form-control btn text-light'>
                                Pilih Mobil
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
      ))}




        {/* <div className="card">
            <div class="card-body">
                <h5 class="card-title">
                    <img src="./assets/fi_car.png" alt="img-car"/>
                </h5>
                <p>Nama/Tipe Mobil</p>
                <h6>Rp 430.000 / hari</h6>
                <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p class="card-text">
                    4 orang
                </p>
                <p class="card-text">
                    Manual
                </p>
                <p class="card-text">
                    Tahun 2020
                </p>
                <div class="btn-group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">
                        Pilih Mobil
                    </button>
                </div>
            </div>
    </div> */}
    
        {/* <CarDetail label="" value={props.car.name}/>
        <CarDetail label="Rp. " value={props.car.price}/>
        <CarDetail label="" value={props.car.passenger}/>
        <CarDetail label="" value={props.car.director}/>
        <CarDetail label="" value={props.car.producer} /> */}
        
        </>
    
    )
}

export default CarCard