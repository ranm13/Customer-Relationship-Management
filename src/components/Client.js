import React, {Component} from 'react'
import Popup from "reactjs-popup";


class Client extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            surename: "",
            country: ""
        }
    }

    updateClientData = () => {
        let fullName = this.state.name + " " + this.state.surename
        let PersonalData = {
            country: this.state.country,
            name: fullName
        }
        this.props.updateClientData(this.props.client._id, PersonalData)
    }


    changeHandler = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    componentDidMount(){
        let nameArr = this.props.client.name.split(" ")
        let name = nameArr[0]
        let surename = nameArr[1]
        let country =  this.props.client.country
        this.setState({name, surename, country})
    }

    render() {
        let client = this.props.client
        let nameArr = client.name.split(" ")
        let name = nameArr[0]
        let surename = nameArr[1]
        return (
        <Popup
            trigger={<div className="client">
            <div className="name table-item">{name}</div>
            <div className="surename table-item">{surename}</div>
            <div className="country table-item">{client.country}</div>
            <div className="first-contact table-item">{client.firstContact.slice(0,10)}</div>
            <div className="email table-item">{client.emailType? client.emailType: "-"}</div>
            <div className="sold table-item">{client.sold? "V": "-"}</div>
            <div className="owner table-item">{client.owner}</div>
        </div>}
            modal>
            {close => (
      <div className="modal">
        <button className="button" onClick={() =>  close()}>X</button>
        <div className="content">
            <div className="popup-item">
                Name: <input name="name" type="text" id="name-input" value={this.state.name} onChange={this.changeHandler}/>
            </div>
            <div className="popup-item">
                Sureame: <input name="surename" type="text" id="surename-input" value={this.state.surename} onChange={this.changeHandler}/>
            </div>
            <div className="popup-item">
                Country: <input name="country" type="text" id="country-input" value={this.state.country} onChange={this.changeHandler}/>
            </div>
        </div>
        <div className="update-button popup-item" onClick={this.updateClientData}>Update</div>
      </div>
    )}
        </Popup>
        )
    }
}
export default Client