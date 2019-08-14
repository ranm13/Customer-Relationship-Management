import React, {Component} from 'react'
import Client from './Client';
import axios from 'axios'
import ClientHeaders from './ClientsHeaders';

class Clients extends Component {
    constructor(){
        super()
        this.state = {
            clientsData: "",
            input: "",
            filterBy: "name"
        }
    }

    updateClientData = async(id, data) => {
        const response = await axios.put(`http://localhost:1991/clients/${id}`, data, function(){})
        this.setState({ clientsData: response.data})
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
            <div id="filter-bar">
                <input name="input" type="text" id="filterBy-input" value={this.state.input} onChange={this.changeHandler} placeholder="Search"></input>
                <select name="filterBy" id="filterBy-select" value={this.state.filterBy} onChange={this.changeHandler}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="email">Email</option>
                    <option value="owner">Owner</option>
                </select>
            </div>
            <ClientHeaders />
            <div id="clients-table-items">
                {this.state.clientsData?(this.state.clientsData
                    .filter(c => (c[this.state.filterBy].toLowerCase().includes(this.state.input.toLowerCase())))
                    .map(c => <Client key={c._id} client={c} updateClientData={this.updateClientData}/>)): null}
            </div>
        </div>)
    }
}
export default Clients