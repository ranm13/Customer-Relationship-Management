import React, {Component} from 'react'

class ClientHeaders extends Component {
    render() {
        return (
            <div id="clients-table-headers">
                <div className="name table-item">Name</div>
                <div className="surename table-item">Surename</div>
                <div className="country table-item">Country</div>
                <div className="first-contact table-item">First Contact</div>
                <div className="email table-item">Email</div>
                <div className="sold table-item">Sold</div>
                <div className="owner table-item">Owner</div>
            </div>)
    }
}
export default ClientHeaders