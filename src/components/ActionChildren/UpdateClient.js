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

    updateClientData =  (e) => {
        let clickedButton = e.target.id
        let data = {}
        switch(clickedButton){
            case "transfer-button":
                data.owner = this.state.owner
                break
            case "send-button":
                data.emailType = this.state.emailType
                break  
            case "declare-button":
                data.sold = true
                break
            default:
                return  
        }
        let client = this.props.clientsData.find(c => c.name === this.props.name)
        if(!client){return}
        let id = client._id
        axios.put(`/clients/${id}`, data, function(){})
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
                <div id="transfer-button" className="action-button update-item" onClick={this.updateClientData} >Transfer</div>
                <div id="send-text" className="update-item">Send Email:</div>
                    <select name="emailType" id="send-select" className="update-item" value={this.state.emailType} onChange={this.changeHandler}>
                        <option value="">Email Type</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                <div id="send-button" className="action-button update-item" onClick={this.updateClientData}>Send</div>
                <div id="declare-text" className="update-item">Declare sale!</div>
                <div id="declare-button" className="action-button update-item" onClick={this.updateClientData}>Declare</div>
            </div>
        </div>)
    }
}
export default UpdateClient