import React, {Component} from 'react'
//import Button from '@material-ui/core/Button';
import axios from 'axios'

class UpdateClient extends Component {
    constructor(){
        super()
        this.state = {
            clientsData: "",
            name: "",
            owner: "",
            emailType: ""
        }
    }

    getOwners = () => {
        let owners = []
        for(let c of this.state.clientsData){
            if(!owners.includes(c.owner)){
                owners.push(c.owner)
            }
        }
        return(owners.map(o =>  <option key={o} value={o}>{o}</option>)) 
    }

    getClients = () => {
        let clients = []
        for(let c of this.state.clientsData){
            if(!clients.includes(c.name)){
                clients.push(c.name)
            }
        }
        return(clients.map(c =>  <option key={c} value={c}></option>)) 
    }

    updateClientData = async (name, data) => {
        let client = this.state.clientsData.find(c => c.name === name)
        let id =  client._id
        const response = await axios.put(`http://localhost:1991/clients/${id}`, data, function(){})
        this.setState({ clientsData: response.data})
    }

    sendMail = () => {
        if(this.state.emailType === ""){return}
        let data = { emailType: this.state.emailType }
        this.updateClientData(this.state.name, data)
    }

    transferOwner = () => {
        if(this.state.owner === ""){return}
        let data = { owner: this.state.owner }
        this.updateClientData(this.state.name, data)
        
    }

    declare = () => {
        let data = { sold: true }
        this.updateClientData(this.state.name, data)
    }

   
    changeHandler = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:1991/clients", function(){})
        this.setState({ clientsData: response.data})
      }

    render() {

        return (
        <div>
            <h4>UPDATE</h4>
            <div>
                <div>Client:</div>
                <input name="name" type="text"  value={this.state.name} onChange={this.changeHandler} placeholder="Client Name" list="clients-list"/>
                <datalist id="clients-list">
                    {this.state.clientsData? this.getClients(): null}
                </datalist>
            </div>
            <div id="update-actions-container">
                <div>
                    <div id="transfer-text" className="update-item">Transfer ownership to: </div>
                    <select name="owner" id="transfer-select" className="update-item" value={this.state.owner} onChange={this.changeHandler}>
                        <option value="">Owner</option>
                        {this.state.clientsData? this.getOwners(): null}
                    </select>
                    <div id="transfer-button" className="action-button update-item" onClick={this.transferOwner} >Transfer</div>
                </div>
                <div>
                <div id="send-text" className="update-item">Send Email:</div>
                    <select name="emailType" id="send-select" className="update-item" value={this.state.emailType} onChange={this.changeHandler}>
                        <option value="">Email Type</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <div id="send-button" className="action-button update-item" onClick={this.sendMail}>Send</div>
                </div>
                <div>
                <div id="declare-text" className="update-item">Declare sale!</div>
                    <div id="declare-button" className="action-button update-item" onClick={this.declare}>Declare</div>
                </div>
            </div>
        </div>)
    }
}
export default UpdateClient