import React, { Component } from 'react';
import AddLocationForm from './AddLocationForm';

class LocationsDetails extends Component{
    constructor(props) {
        super(props);
        this.modifyLocation = this.modifyLocation.bind(this);
        this.updateCode = this.updateCode.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.state = {
            isEditing: false,
            code: '',
            city: '',
            address:''
        }
    }

    toggle() {
        this.setState({
           isEditing : !this.state.isEditing
        })
    }

    modifyLocation() {
        this.props.editLocation(this.props.index, this.state.code, this.state.city, this.state.address);
        this.toggle()
    }

    updateCode(e) {
        this.setState({
            code: e.target.value
        });
    }
    updateCity(e) {
        this.setState({
            city: e.target.value
        });
    }
    updateAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    renderLocationModifyForm() {
        return (
            <section>
                <form onSubmit={this.modifyLocation}>
                    <input type='text' defaultValue={this.props.code} 
                        onChange={(e) => this.updateCode(e)}  />
                    <input type='text' defaultValue={this.props.city} 
                       onChange={(e) => this.updateCity(e)}  />
                    <input type='text' defaultValue={this.props.address} 
                        onChange={(e) => this.updateAddress(e)}  /> 
                   <button type='submit'>Modify</button>
                </form>
            </section>    

            
        )
    }
    renderLocationList() {
        return (
            <div>
                
                <li>
                    {this.props.code},{this.props.city}-{this.props.address}
                    <button onClick={() => { this.props.deleteLocations(this.props.index) }}>Delete</button>&nbsp;
                    <button onClick={(evt) => {
                        evt.stopPropagation();
                        this.toggle()
                    }}>Modify</button>
                </li>
            </div>    
        )
    }

    render() {
        const { isEditing } = this.state;
        return (
        <section>
                {isEditing ? this.renderLocationModifyForm() : this.renderLocationList()} 
           </section>     
        )
    }

}

export default LocationsDetails;