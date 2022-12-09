import { Link } from 'react-router-dom';


const CountryList = (props) => {

    //const [countries, setCountries] = useState(CountryData)

    return (
        <div className='col-5' style={{ maxHeight: '90vh', overflow: 'scroll' }}>


            <div className='list-group'>
                {props.countries.map((oneCountry) => {
                    return (
                        <Link className="list-group-item list-group-item-action" to={`/${oneCountry.alpha3Code}`}>
                            {oneCountry.name.common}
                        </Link>
                    )
                })}
            </div>

        </div>
    );
}

export default CountryList;
