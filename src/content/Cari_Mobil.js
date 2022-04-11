import { useState } from 'react';
import Hero from './landing/Hero';
import Search_Box from './cari-mobil/Search_Box';
import Result from './result/Result';


function Cari_Mobil() {

    const  [carList, setCarList] =useState([])
    return (
        <>
        <Hero />
        {/* <Search_Box setCarList={setCarList}/>
        <Result carList={carList}/> */}
        <Search_Box />
        </>
    )
}

export default Cari_Mobil;