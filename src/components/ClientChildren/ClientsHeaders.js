import React, {Component} from 'react'

class ClientHeaders extends Component {
    render() {
        return (
            <div id="clients-table-headers">
                <div className="table-item">Name</div>
                <div className="table-item">Surename</div>
                <div className="table-item">Country</div>
                <div className="table-item">First Contact</div>
                <div className="table-item">Email</div>
                <div className="table-item">Sold</div>
                <div className="table-item">Owner</div>
            </div>)
    }
}
export default ClientHeaders