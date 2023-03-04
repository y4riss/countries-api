

const Details = ({country,clicked}) => {

    if (clicked)
    {
        return (
            <div>
                <p>Capital : {country.capital[0]} </p>
                <p>Region : {country.region}</p>
                <p>currencies : </p>
                <ul>
                    {Object.keys(country.currencies).map((k,i)=>(
                        <li key={i}>{country.currencies[k].name} ({country.currencies[k].symbol})</li>
                    ))}
                </ul>
                <p>languages :</p>
                <ul>
                    {Object.keys(country.languages).map((k,i)=>(
                        <li key={i}>{country.languages[k]}</li>
                    ))}
                </ul>
                <img src={country.flags.png} ></img>
            </div>
        )
    }



}


export default Details;