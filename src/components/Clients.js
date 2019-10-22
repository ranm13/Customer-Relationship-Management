import React, {Component} from 'react'
import Client from './ClientChildren/Client';
import axios from 'axios'
import ClientHeaders from './ClientChildren/ClientsHeaders';

class Clients extends Component {
    constructor(){
        super()
        this.state = {
            clientsData: "",
            input: "",
            filterBy: "name", 
            lowerIndex:0,
            higherIndex:20
        }
    }

    updateClientData = async(id, data) => {
        const response = await axios.put(`/clients/${id}`, data, function(){})
        this.setState({ clientsData: response.data})
      }

    paginate = (e) => {
        let sign = e.target.outerText
        let changeBy = (sign === "<"? -20 : 20)
        if(changeBy === -20 && this.state.lowerIndex === 0){return}
        let lowerIndex = this.state.lowerIndex + changeBy
        let higherIndex = this.state.higherIndex + changeBy
        this.setState({
            lowerIndex, higherIndex
        })
    }

    changeHandler = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    async componentDidMount() {
        const response = await axios.get("/clients", function(){})
        this.setState({ clientsData: response.data})
      }

    render() {
        return (
        <div>
            <div id="filter-bar">
                <input name="input" type="text" className="filterBy-item" value={this.state.input} onChange={this.changeHandler} placeholder="Search"></input>
                <select name="filterBy" className="filterBy-item" value={this.state.filterBy} onChange={this.changeHandler}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="email">Email</option>
                    <option value="owner">Owner</option>
                </select>
                <div id="paginate-button">
                    <span  onClick={this.paginate}>{"<"}</span><span>{this.state.lowerIndex}-{this.state.higherIndex}</span><span onClick={this.paginate}>{">"}</span>
                </div>
            </div>
            <ClientHeaders />
            <div id="clients-table-items">
                {this.state.clientsData?(this.state.clientsData
                    .filter(c => (c[this.state.filterBy].toLowerCase().includes(this.state.input.toLowerCase())))
                    .filter(c => this.state.clientsData.indexOf(c) >= this.state.lowerIndex && this.state.clientsData.indexOf(c) < this.state.higherIndex)
                    .map(c => <Client key={c._id} client={c} updateClientData={this.updateClientData}/>)): null}
            </div>
        </div>)
    }
}
export default Clients