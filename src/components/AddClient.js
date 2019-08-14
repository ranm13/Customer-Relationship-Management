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
            axios.post(`http://localhost:1991/client`, data, function(){})
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
            <div>
                First name:
                <input name="firstName" type="text"  value={this.state.firstName} onChange={this.changeHandler}/>
            </div>
            <div>
                Surename:
                <input name="surename" type="text"  value={this.state.surename} onChange={this.changeHandler}/>
            </div>
            <div>
                Country:
                <input name="country" type="text"  value={this.state.country} onChange={this.changeHandler}/>
            </div>
            <div>
                Owner:
                <input name="owner" type="text"  value={this.state.owner} onChange={this.changeHandler}/>
            </div>
            <div onClick={this.addNewClient}> Add New Client</div>
            {this.state.missingFields? <h1 style={{color: "red"}}>Required fields are missing!</h1> : null}
        </div>)
    }
}
export default AddClient