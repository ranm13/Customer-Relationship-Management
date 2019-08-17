import React, {Component} from 'react'

class ClientInput extends Component {

    getClients = () => this.props.clientsNames.map(c => <option key={c} value={c}></option>)

    changeHandler = (e) => {
        let nameInput = e.target.value
        this.props.changeName(nameInput)
    }

    render() {
        return (
        <div>
            <h4>UPDATE</h4>
            <div className="update-item">Client:
            <input name="name" type="text" id="client-name-input" className="update-item" value={this.props.name} onChange={this.changeHandler} placeholder="Client Name" list="clients-list"/>
            <datalist id="clients-list">
               {this.getClients()}
            </datalist></div>
        </div>)
    }
}
export default ClientInput