import React, {Component} from 'react'
import axios from 'axios'

class UpdateClient extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            owner: "",
            emailType: ""
        }
    }

    getOwners = () => {
        let owners = []
        for(let c of this.props.clientsData){
            if(!owners.includes(c.owner)){
                owners.push(c.owner)
            }
        }
        return(owners.map(o =>  <option key={o} value={o}>{o}</option>)) 
    }

    updateClientData = async (name, data) => {
        let client = this.props.clientsData.find(c => c.name === name)
        let id =  client._id
        await axios.put(`http://localhost:1991/clients/${id}`, data, function(){})
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

    render() {

        return (
        <div>
            <div id="update-actions-container" >
                <div id="transfer-text" className="update-item">Transfer ownership to: </div>
                    <select name="owner" id="transfer-select" className="update-item" value={this.state.owner} onChange={this.changeHandler}>
                        <option value="">Owner</option>
                        {this.getOwners()}
                    </select>
                <div id="transfer-button" className="action-button update-item" onClick={this.transferOwner} >Transfer</div>
                <div id="send-text" className="update-item">Send Email:</div>
                    <select name="emailType" id="send-select" className="update-item" value={this.state.emailType} onChange={this.changeHandler}>
                        <option value="">Email Type</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                <div id="send-button" className="action-button update-item" onClick={this.sendMail}>Send</div>
                <div id="declare-text" className="update-item">Declare sale!</div>
                <div id="declare-button" className="action-button update-item" onClick={this.declare}>Declare</div>
            </div>
        </div>)
    }
}
export default UpdateClient