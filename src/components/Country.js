
import Details from "./Details";
import {useState } from 'react'

const Country =  ({country}) => {

   const [click,setClick] = useState(false);
    return (
        <div className="country">
            <div className="country-name">
                <p>{country.name.common}</p>
                <button onClick={()=>setClick(!click)}>{click? 'Hide details' : 'Show details'}</button>
            </div>
            <Details country={country} clicked={click}></Details>
        </div>
    )
}

export default Country;