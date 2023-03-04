
import Details from "./Details";
import {useState } from 'react'

const Country =  ({country}) => {

   const [click,setClick] = useState(false);
    return (
        <div>
            <p>{country.name.official}</p>
            <button onClick={()=>setClick(!click)}>{click? 'hide' : 'show'}</button>
            <Details country={country} clicked={click}></Details>
        </div>
    )
}

export default Country;