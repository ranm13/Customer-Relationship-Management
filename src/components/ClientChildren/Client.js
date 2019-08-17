import React, {Component} from 'react'
import Popup from "reactjs-popup";
import moment from 'moment'
import { FaCheck } from 'react-icons/fa';

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
            <div className="table-item">{name}</div>
            <div className="table-item">{surename}</div>
            <div className="table-item">{client.country}</div>
            <div className="table-item">{moment(client.firstContact).format('DD/MM/YYYY')}</div>
            <div className="table-item">{client.emailType? client.emailType: "-"}</div>
            <div className="table-item">{client.sold? <FaCheck />: "-"}</div>
            <div className="table-item">{client.owner}</div>
        </div>}
            modal>
            {close => (
      <div className="modal">
        <button className="button" onClick={() => close()}>X</button>
        <div className="content">
            <div className="popup-item">
                Name: <input name="name" type="text" value={this.state.name} onChange={this.changeHandler}/>
            </div>
            <div className="popup-item">
                Sureame: <input name="surename" type="text" value={this.state.surename} onChange={this.changeHandler}/>
            </div>
            <div className="popup-item">
                Country: <input name="country" type="text" value={this.state.country} onChange={this.changeHandler}/>
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