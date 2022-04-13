import React, {useState, useEffect } from 'react'
import './Search_Box.css';
import axios from 'axios';
import ListCar from '../result/CarCard';


function Search_Box() {

//     const [driverOptions, setDriverOptions] = useState(['option1','option2'])
//     const [timeOptions, setTimeOptions] = useState(['option1','option2'])
//     const [passengerOptions, setPassengerOptions] = useState(['option1','option2'])

// useEffect(() => {
//     fetch('https://swapi.dev/api/people')
//     .then (response => {
//         return response.json()
//     })

//     .then( data => {
//         setDriverOptions([...data.results])
//     })
//     .catch( err => {
//         console.log(err)
//     })

//     fetch('https://swapi.dev/api/planets')
//     .then (response => {
//         return response.json()
//     })

//     .then( data => {
//         setTimeOptions([...data.results])
//     })
//     .catch( err => {
//         console.log(err)
//     })

//     fetch('https://swapi.dev/api/species')
//     .then (response => {
//         return response.json()
//     })

//     .then( data => {
//         setPassengerOptions([...data.results])
//     })
//     .catch( err => {
//         console.log(err)
//     })
// },[])


//     const {register, handleSubmit} = useForm()
//     const onSubmit = (formData) => {

//        fetch ('https://rent-cars-api.herokuapp.com/customer/car')
//        .then(response => {
//            return response.json()
//        })
//        .then(data => {
//            props.setMovieList([...data.results.filter((item) => {
//                let hasDriver, hasPassenger, hasTime, hasDate
//                if ( formData.driver ) {
//                    hasDriver= item.drivers.includes(formData.driver)
//                }else{
//                    hasDriver= true
//                }
//              if (formData.passenger){
//                  hasPassenger=item.passengers.includes(formData.passenger)
//              }else {
//                  hasPassenger = true
//              }
//              if ( formData.time){
//                  hasTime=item.time.includes(formData.time)
//              }else {
//                  hasTime= true
//              }
//              if ( formData.date) {
//                 hasDate = new Date (item.date) >= new Date(formData.date)
//              }else {
//                  hasDate= true
//              }

//                 return (hasDriver && hasPassenger && hasTime && hasDate)

//            })])
//        })

//     }

useEffect(() => {
}, []);
const [listCar, setListCar] = useState([]);
const [isClickSerch, setIsClickSearch] = useState(false);
const [isBtnSerch, setIsBtnSearch] = useState(true);

const reqData = async () => {
    const { data } = await axios(`https://rent-cars-api.herokuapp.com/admin/car`);
    setListCar(data);
    setIsClickSearch(true);
  };

    return (
        <>
            <section class="py-5" id="search">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                            <div className='search_container'>
                                <div className='search_group'>
                                    <label htmlfor="driver">Tipe Driver</label>
                                    <select class="form-control selectpicker" name="driver" id="driver">
                                    <option value="" disabled selected>Pilih Tipe Driver</option>
                                        <option value="dgnSopir">Dengan Sopir</option>
                                        <option value="tnpSopir">Tanpa Sopir (Lepas Kunci)</option>
                                    </select>
                                </div>

                                <div className='search_group'>
                                    <label htmlfor="date">Tanggal</label>
                                    <input type="date" name="date" id="date" placeholder='Pilih Tanggal'/>
                                </div>
                                <div className='search_group'>
                                    <label htmlfor="time">Waktu Jemput/Ambil</label>
                                    <select class="form-control" name="time" id="time">
                                    <option value="" disabled selected>Pilih Waktu</option>
                                        <option value="08.00">08.00    WIB</option>
                                        <option value="09.00">09.00    WIB</option>
                                    </select>                                
                                    </div>
                                <div className='search_group'>
                                    <label htmlfor="passenger">Jumlah Penumpang (optional)</label>
                                    <input type='number' name="passenger" id="passenger" placeholder='Jumlah Penumpang'/>               
                                    </div>
                                <div className='search-group'>
                                <label htmlfor=""></label>
                                    <div className='submit'>
                                        <button onClick={() => {setIsBtnSearch(false); reqData();}} className='btn-find'>Cari Mobil</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <section className="container d-flex col-9 justify-content-center">
                    <div className='row'>
                        {isClickSerch ? (
                            <>{listCar.length > 0 && <ListCar listCar={listCar} />}</>
                        ) : null}
                    </div>
                </section>
        </>
    )
}

export default Search_Box;