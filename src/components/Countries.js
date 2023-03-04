import Country from "./Country";


const Countries = ({err,countries})=>{

    if (err)
        return (
            <div>{err}</div>
        )
    if (!countries)
    {
        return (
            <div>look for a country...</div>
        )
    }
    if (countries.length > 10)
    {
        return (
            <div>Too many matches...</div>
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