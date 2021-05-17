import {Col, Container, Row} from "reactstrap";
import {useState} from 'react';
import { usePlacesWidget } from "react-google-autocomplete";
import {NavLink} from "react-router-dom";
import Geocode from "react-geocode";





const HomePage = (props) => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const { ref } = usePlacesWidget({
        apiKey: 'AIzaSyARc4yC0nncVwgbkf4NpNItdfL7xnqFNJw',
        onPlaceSelected: (place) => {
            for (let i = 0; i < place.address_components.length; i++) {
                for (let j = 0; j < place.address_components[i].types.length; j++) {
                    switch (place.address_components[i].types[j]) {
                        case "locality":
                            setCity(place.address_components[i].long_name);
                            break;
                        case "country":
                            setCountry(place.address_components[i].long_name);
                            break;
                    }
                }
            }
        }
    });
    Geocode.setApiKey('AIzaSyARc4yC0nncVwgbkf4NpNItdfL7xnqFNJw');
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                (response) => {
                    for (let i = 0; i < response.results[1].address_components.length; i++) {
                        for (let j = 0; j < response.results[1].address_components[i].types.length; j++) {
                            switch (response.results[1].address_components[i].types[j]) {
                                case "locality":
                                    setCity(response.results[1].address_components[i].long_name);
                                    ref.current.value = response.results[1].address_components[i].long_name;
                                    break;
                                case "country":
                                    setCountry(response.results[1].address_components[i].long_name);
                                    ref.current.value += ', ' + response.results[1].address_components[i].long_name;
                                    break;
                            }
                        }
                    }
                },
                (error) => {
                    console.error(error);
                }
            );
        });

    }


    return(
        <Container>
            <Row>
                <Col >
                    <h1>Weather checker, created by Dmytro Boiko</h1>
                    <div className='text-center'>
                        <label>Location:</label>
                        <br/>
                        <input ref={ref} className='w-100' placeholder='Choose your city' defaultValue={city ? city + ', ' + country : ''}/>
                        <br/>
                        <button className='link border-animation border-0 m-3 mx-auto' style={{background: 'none'}} onClick={() => getLocation()}>Get current location</button>
                        <NavLink className='link border-animation d-block mx-auto' style={{width: 'fit-content'}} to={'/weather/' + city + '_' + country}>Get Weather</NavLink>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage;