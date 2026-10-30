import './CountryCard.css'

function CountryCard(props) {

    const {country} = props
    const {flags, name, population, region, capital} = country

    return (
        <li className="country">
            <img className="country-img" src={flags.svg} alt={`Country flag ${name}`}/>
            <div className="country-name">{name}</div>

            <div className="country-info">
                <div className="country-population"><span>Population:</span> {population} </div>
                <div className="country-region"><span>Region:</span> {region} </div>
                <div className="country-capital"><span>Capital:</span> {capital}</div>
            </div>
        </li>
    )
}

export default CountryCard