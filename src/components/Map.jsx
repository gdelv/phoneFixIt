import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import StoreInfo from '../shared/StoreInfo'
import FindStore from './FindStore'


const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative'
    
};

class MapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [
                { lat: 47.49855629475769, lng: -122.14184416996333, name: 'Fusion Wireless', address: '53 Main St. Port Washington, NY 11050', number: '(516) 944-9800' },
                { latitude: 47.359423, longitude: -122.021071, name: 'Fusion Wireless', address: '376 Plandome Rd, Manhasset,NY 11030', number: '(516) 439-4300' },
                { latitude: 47.2052192687988, longitude: -121.988426208496, name: 'Fusion Wireless', address: '1709 Crosby Avenue Bronx, NY 10461', number: '(718) 822-5522' },
                { latitude: 47.6307081, longitude: -122.1434325, name: 'Fusion Wireless', address: '132-18 14th Ave. College Point, NY 11356', number: '(917) 563-7995' },
                { latitude: 47.3084488, longitude: -122.2140121, name: 'Fusion Wireless', address: '94 Market St.Yonkers, NY 10710 (914) 346-8787', number: '(914) 346-8787' },
                { latitude: 47.5524695, longitude: -122.0425407, name: 'Fusion Wireless', address: '6676 Fresh Pond Rd. Ridgewood, NY 11385', number: '(718) 386-1200' },
                { latitude: 47.5524695, longitude: -122.0425407, name: 'Fusion Wireless', address: '514 Union Blvd. West Islip, NY 11795', number: '(631) 661-1900'},
                { latitude: 47.5524695, longitude: -122.0425407, name: 'Fusion Wireless', address: '978 Broadway Thornwood, New York 10594', number: '(914) 485-1600'},
                { latitude: 47.5524695, longitude: -122.0425407, name: 'Fusion Wireless', address: '491 Myrtle Ave. Brooklyn, NY 11205', number: '(718)-210-0211'},
                { latitude: 47.5524695, longitude: -122.0425407, name: 'Fusion Wireless', address: '1255 Veterans Memorial Hwy Hauppauge, NY 11788', number: '(631) 360-6336'},
                { latitude: 47.5524695, longitude: -122.0425407, name: 'Fusion Wireless', address: '286a Portion Rd. Lake Ronkonkoma, NY 11779', number: '(631) 360-6336'}

            ]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    displayStores = () => {
        return this.state.stores.map((store, index) => {
            return <div className='store-card' key={index}>
                <StoreInfo
                    name={store.name}
                    address={store.address}
                    number={store.number}
                />
            </div>
        })
    }



    render() {
        return (
            <div className='map-container'>
                <FindStore/>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                >
                    {this.displayMarkers()}
                </Map>
                <div className='store-card-container'>
                    {this.displayStores()}

                </div>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDRsSPTarYqQTdo1F4qQ1sBfF0wmPWkH3M'
})(MapContainer);