import React, { Component } from 'react';
import './AddLocationForm.css';
import LocationDetails from './LocationsDetails'

class AddLocationForm extends Component{
    constructor(props) {
        super(props);
        this.updateCode = this.updateCode.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.addNewLocation = this.addNewLocation.bind(this);
        this.deleteLocation = this.deleteLocation.bind(this);
        this.editLocation = this.editLocation.bind(this);
        this.state = {
            locations: [
                {
                    code: 'F2',
                    city: 'Bangalore',
                    address:'MEBP'
                }
            ],
            currentLocation:
            
              {
                code: '',
                city:'',
                address:''
              }
        }
    }

    updateCode(newValue) {
        const clocation = this.state.currentLocation;
        clocation.code = newValue.target.value;
    
        // update state
        this.setState({
            currentLocation:clocation
        });
    }
    updateCity(newValue) {
        const clocation = this.state.currentLocation;
        clocation.city = newValue.target.value;
    
        // update state
        this.setState({
            currentLocation:clocation
        });
    }
    updateAddress(newValue) {
        const clocation = this.state.currentLocation;
        clocation.address = newValue.target.value;
    
        // update state
        this.setState({
            currentLocation:clocation
        });
    }
    addNewLocation(evt) {
       
        evt.preventDefault();
        let locations = this.state.locations;
        let ccode = this.state.currentLocation.code;
        let ccity = this.state.currentLocation.city;
        let caddress= this.state.currentLocation.address;
        locations.push({
          code: ccode,
            city: ccity,
          address:caddress
        })
        this.setState({
            locations:locations,
            currentLocation:
            
              {
                code: '',
                city:'',
                address:''
              }
        })
        
    }
    
    deleteLocation(index) {
        let locations = this.state.locations;
        locations.splice(index, 1)
        this.setState({
           locations:locations
        })
    }

    editLocation(index, code, city, address) {
        let locations = this.state.locations;
        let location = locations[index];
        location['code'] = code;
        location['city'] = city;
        location['address'] = address;
        this.setState({
            locations:locations
        })

    }
    render() {
        return (
            <div className='formbase'>
                <h2 className='loactionheading'> CTS Locations</h2>    
                <form className='formspace' onSubmit={this.addNewLocation}>
                <p><label className='labels' htmlFor="test">Location Code</label>&nbsp; &nbsp; &nbsp;
                <input type="text" id="code" onChange={this.updateCode}/></p>
                <p><label className='labels' htmlFor="test">City</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <input type="text" id="city" onChange={this.updateCity}/></p> 
                <p><label className='labels' htmlFor="test">Address</label>&emsp;&emsp;&emsp;&emsp;
                <input type="text" id="address" onChange={this.updateAddress}/> </p>  
                    <button className='addButton' type='submit' onClick={this.addNewLocation}>Add Location</button>    
                </form>   
                <h3>Current CTS Locations</h3>
                <ol>
                    {
                        this.state.locations.map((location, index) => {
                           
                            return <LocationDetails    
                                key={index}
                                location={location}
                                index={index}
                                code={location.code}
                                city={location.city}
                                address={location.address}
                                deleteLocations={this.deleteLocation}
                                editLocation={this.editLocation}
                                />
                        }) 
                    
                    }    
                    
                </ol>
            </div>
        )
    }
}

export default AddLocationForm;