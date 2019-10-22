import React, {Component} from 'react'
import axios from 'axios'
import UpdateClient from './ActionChildren/UpdateClient';
import AddClient from './ActionChildren/AddClient';
import ClientInput from './ActionChildren/ClientInput';

class Actions extends Component {
    constructor(){
        super()
        this.state = {
            clientsData: "",
            name: ""
        }
    }

    changeName = (name) => this.setState({name: name})
   
    getClientsNames = () => {
        let clients = []
        for(let c of this.state.clientsData){
            if(!clients.includes(c.name)){
                clients.push(c.name)
            }
        }
        return clients
    }

    async componentDidMount() {
        const response = await axios.get("/clientsforactions", function(){})
        this.setState({ clientsData: response.data})
      }

    render() {
        return (
        <div id="actions-container">
            {this.state.clientsData?<div>
            <ClientInput name={this.state.name} clientsNames={this.getClientsNames()} changeName={this.changeName} />
           <UpdateClient name={this.state.name} clientsData={this.state.clientsData}/></div>: null}
           <hr></hr>
           <AddClient addNewClient={this.props.addNewClient}/>
        </div>)
    }
}
export default Actions