import Country from "./Country";


const Countries = ({err,countries})=>{

    if (err)
        return (
            <div className="error">{err}</div>
        )
    if (!countries)
    {
        return (
            <div className="error">look for a country...</div>
        )
    }
    if (countries.length > 10)
    {
        return (
            <div className="error">Too many matches...</div>
        )
    }
    {
        return (
            <div>
                {countries.map((c,i) => (
                  <Country key={i}  country={c}></Country>  
                ))}
            </div>
        )
    }

}

export default Countries;