import React, {Component} from 'react'
import UpdateClient from './UpdateClient';
import AddClient from './AddClient';

class Actions extends Component {
    render() {
        return (
        <div id="actions-container">
           <UpdateClient updateClientData={this.props.updateClientData} />
           <hr></hr>
           <AddClient addNewClient={this.props.addNewClient}/>
        </div>)
    }
}
export default Actions