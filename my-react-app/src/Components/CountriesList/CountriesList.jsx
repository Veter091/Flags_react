import CountryCard from "./CountryCard/CountryCard.jsx";
import './CountriesList.css'

function CountriesList(props) {

    const {countries} = props

    return (
        <ul className="countries-list">
            {countries.map(country => 
                <CountryCard
                key={country.alpha3Code}
                country={country}
                 />
            )}
        </ul>
    )
}

export default CountriesList