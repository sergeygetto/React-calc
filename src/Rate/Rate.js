import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'


class Rate extends React.Component {
    constructor(props){
        super(props);
        this.state={
            'date':'',
            'currencyRate':{}
        }
       this.rateArr =['USD','RUB','GBP','CZK'];
       this.getRates()

}


    getRates =()=>{
        fetch('https://api.exchangeratesapi.io/latest?')
            .then(data => {
                return data.json()
            }) 
            .then( data =>{
                
                console.log(data)
            this.setState({date: data.date})
            let result = {};
                // for(let i = 0; i < this.rateArr.length; i++){
                // result[this.rateArr[i]] = data.rates[this.rateArr[i]]}
                this.rateArr.forEach(elem =>{
                    result[elem] = data.rates[elem]
                })
                
                // console.log(result);
                this.setState({currencyRate: result})
                console.log(data.base)
            })
        }
    
    render(){


  return (
<div className='rate'>
<h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
            {Object.keys(this.state.currencyRate).map(elem =>{
               return <div className="block flex-item" key={elem}>
                <div className="currency-name">{elem}</div>
                <div className="currency-in">{this.state.currencyRate[elem]}*</div>
                <p>* По отношению к 1 EUR</p>
            </div>
            }) }

        </div>
        <Calc rate={this.state.currencyRate}/>
        </div>
);
}
}
export default Rate;
