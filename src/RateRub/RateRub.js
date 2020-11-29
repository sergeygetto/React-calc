import React from 'react';
import './RateRub.css';
import Calc from '../Calc/Calc'


class RateRub extends React.Component {
    constructor(props){
        super(props);
        this.state={
            'date':'',
            'currencyRate':{}
        }
       this.rateArr =['USD','EUR','GBP','CNY'];
       this.getRates()

}


    getRates =()=>{
        fetch('https://api.exchangeratesapi.io/latest?base=RUB')
            .then(data => {
                return data.json()
            }) 
            .then( data =>{
                
                console.log(data)
            this.setState({date: data.date})
            let result = {};
                this.rateArr.forEach(elem =>{
                    result[elem] = data.rates[elem]
                })
                
                this.setState({currencyRate: result})
                console.log(data.base)
            })
        }
    
    render(){


  return (
<div className='rateRub'>
<h3 className='center'> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
            {Object.keys(this.state.currencyRate).map(elem =>{
               return <div className="block flex-item" key={elem}>
                <div className="currency-name">{elem}</div>
                <div className="currency-in">{this.state.currencyRate[elem]}*</div>
                <p>* По отношению к 1 RUB</p>
            </div>
            }) }

        </div>
        <Calc rate={this.state.currencyRate}/>
        </div>
);
}
}
export default RateRub;
