
const Search = ({handleInput}) => {


    return(
        <div className="search">
            <input onChange={handleInput} type="text" placeholder="Find countries..."/>
        </div>
    )

}

export default Search;