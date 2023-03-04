

const Search = ({handleInput}) => {


    return(
        <div>
            <label>Find countries</label>
            <input onChange={handleInput} type="text" />
        </div>
    )

}

export default Search;