import React, {Component} from 'react'
import axios from 'axios'
import UpdateClient from './ActionChildren/UpdateClient';
import AddClient from './ActionChildren/AddClient';
import ClientInput from './ActionChildren/ClientInput';

class Actions extends Component {
    constructor(){
        super()
        this.state = {
            clientsData: ""
        }
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:1991/clientsforactions", function(){})
        this.setState({ clientsData: response.data})
      }

    render() {
        return (
        <div id="actions-container">
            {this.state.clientsData?<div><ClientInput clientsData={this.state.clientsData}/>
           <UpdateClient clientsData={this.state.clientsData}/></div>: null}
           <hr></hr>
           <AddClient addNewClient={this.props.addNewClient}/>
        </div>)
    }
}
export default Actions