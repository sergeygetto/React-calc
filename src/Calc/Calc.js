import React from 'react';
import './Calc.css';



class Calc extends React.Component {
    constructor(props){
        super(props);
        this.state={
            'result': 0
        }
       

}
static getDerivedStateFromProps(props, state){
    return {rate: props.rate};
}

rateSub =(e)=> {
e.preventDefault();
let elements = e.target.elements;
//console.log(elements['cyrrentOpt'].value);
let cyrrentOpt = elements['cyrrentOpt'].value;
let cyrrentInp = elements['cyrrentInp'].value;
this.setState({result: cyrrentInp / this.state.rate[cyrrentOpt]})

}

    
    render(){


  return (
<div className='calcul'>
<h3> Калькулятор обмена</h3>
        <div className="block">
            <div>Выберите валюту и ее количество:</div>
            <form onSubmit={this.rateSub}>
                <input type="number" defaultValue="" name='cyrrentInp' className='form'/>
                <select name="cyrrentOpt" className='form'>
                {Object.keys(this.props.rate).map(elem =>{
               return <option key={elem} defaultValue="USD">{elem}</option>}
               )
               } 
                </select>
                <input  type='submit' className='submit' value="Расчитать"/>
                </form>
            
            
            <div>
                <h4>Результат:</h4>
                <ul className="calc-res">
                    <li> {this.state.result} у.е</li>
                    
                </ul>
            </div>
        </div>
        </div>
);
}
}
export default Calc;
