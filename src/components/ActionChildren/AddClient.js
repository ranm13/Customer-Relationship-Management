import React, {Component} from 'react'
import axios from 'axios'

class AddClient extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            surename: "",
            country: "", 
            owner: "",
            missingFields: false
        }
    }

    isAllFiledsFilled = () =>{
        let fields = [this.state.firstName, this.state.surename, this.state.country, this.setState.owner]
        return fields.every(i => !(i === ""))
    }

    addNewClient = () => {
        if(this.isAllFiledsFilled()){
            let data = {
                name: this.state.firstName + " " + this.state.surename,
                country: this.state.country, 
                owner: this.state.owner,
                firstContact: new Date()
                }
            axios.post(`/client`, data, function(){})
            this.setState({
                missingFields: false
            })
        }
        else{
            this.setState({
                missingFields: true
            })
        }
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
            <h4>ADD CLIENT</h4>
            <div id="add-client-table">
                <div className="add-client-item">First name:</div>
                <input name="firstName" type="text" className="add-client-item" value={this.state.firstName} onChange={this.changeHandler}/>
                <div className="add-client-item"> Surename: </div>
                <input name="surename" type="text" className="add-client-item" value={this.state.surename} onChange={this.changeHandler}/>
                <div className="add-client-item">Country: </div>
                <input name="country" type="text" className="add-client-item" value={this.state.country} onChange={this.changeHandler}/>
                <div className="add-client-item">Owner:</div>
                <input name="owner" type="text" className="add-client-item"  value={this.state.owner} onChange={this.changeHandler}/>
            </div>
            <div id="add-client-button" onClick={this.addNewClient}> Add New Client</div>
            {this.state.missingFields? <h1 style={{color: "red"}}>Required fields are missing!</h1> : null}
        </div>)
    }
}
export default AddClient