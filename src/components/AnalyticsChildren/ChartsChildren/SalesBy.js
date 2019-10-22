import React, {Component} from 'react'
import { BarChart, XAxis,YAxis, Tooltip, Bar, ResponsiveContainer} from 'recharts';

class SalesBy extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            category: "country"
        }
    }

    getMonthName = (monthNum) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
        
        return monthNames[monthNum]
    }

    countSalesByCategory = () => {
        let category = this.state.category
        let countCategory = {}
        let data = []
        if(category === "month"){
            this.props.clientsData.forEach(c => c.month = (new Date(c.firstContact)).getMonth())
            this.props.clientsData
            .filter(c => c.sold)
            .forEach(c => countCategory[c[category]]? countCategory[c[category]]++ :  countCategory[c[category]] = 1)
            let keys = Object.keys(countCategory)
            keys.forEach(e =>  data.push({name: this.getMonthName(e), sales: countCategory[e]}))
        }
        else{
            this.props.clientsData
                .filter(c => c.sold)
                .forEach(c => countCategory[c[category]]? countCategory[c[category]]++ :  countCategory[c[category]] = 1)
            let keys = Object.keys(countCategory)
            keys.forEach(e =>  data.push({name: e, sales: countCategory[e]}))
        }
        this.setState({ data })
    }

    changeHandler = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        }, this.countSalesByCategory)
    }

    componentDidMount(){
        this.countSalesByCategory()
    }

    render() {
        return (
        <div className="sales-by-chart">
            <div id="sales-by-container">Sales By
                <select id="sales-by-select" name="category" value={this.state.category} onChange={this.changeHandler}>
                        <option value="country">Country</option>
                        <option value="month">Month(all time)</option>
                        <option value="emailType">Email</option>
                        <option value="owner">Owner</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={this.state.data}
                    margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                    }}>
                    <YAxis type="number" label={{ value: 'Sales', angle: -90, position: 'insideLeft' }} tick={{fontSize: 10, fill:"black", fontWeight:"bold"}}/>
                    <XAxis dataKey="name" interval={0} angle={-30} tick={{fontSize: 9, fill:"black", fontWeight:"bold", textAnchor: 'end'}}/>
                    <Tooltip />
                    <Bar dataKey="sales" fill="#955196" />
                </BarChart>
            </ResponsiveContainer>
        </div>)
    }
}
export default SalesBy