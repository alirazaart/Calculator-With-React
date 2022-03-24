import React from 'react'
import './Calculator.css'
class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
          button:''
        }
    }
    pressButton(value){
        let button = this.state.button+'';
        let lastValueIsOperator = button.slice(-1);
        let operators = ['+','-','/','*'];
        if(operators.includes(value)){
            if(operators.includes(lastValueIsOperator)){
                button = button.slice(0, -1); 
            }
        }
        if(operators.includes(lastValueIsOperator) && lastValueIsOperator === value){
            if(operators.includes(value)){
            }
            else
            {
                this.setState({
                    button: button+value
                })
            }
        }
        else
        {
            this.setState({
                button: button+value
            })
        }
    }
    calculate(){
        this.setState({
            button: eval(this.state.button)
        })
    }
    empty(){
        this.setState({
            button: ''
        })
    }
    render() {
        return (
             <div className="main-calculator">
                 <h4>Calculator with React</h4>
                <input id="calc" value={this.state.button} type ="text" placeholder='0' name="answer" readOnly /> 
                <br/> <br/> 
                <button className="button" onClick={() => this.pressButton(7)}>7</button>  
                <button className="button" onClick={() => this.pressButton(8)}>8</button>  
                <button className="button" onClick={() => this.pressButton(9)}>9</button>  
                <button className="button" style={{padding: "20px 22px"}} onClick={() => this.pressButton('*')}> *</button>  
                <br/> <br/>  
                <button className="button" onClick={() => this.pressButton(4)}>4</button>  
                <button className="button" onClick={() => this.pressButton(5)}>5</button>  
                <button className="button" onClick={() => this.pressButton(6)}>6</button>  
                <button className="button" style={{padding: "20px 22px"}} onClick={() => this.pressButton('-')}> -</button>  
                <br/> <br/>  
                <button className="button" onClick={() => this.pressButton(1)}>1</button>  
                <button className="button" onClick={() => this.pressButton(2)}>2</button>  
                <button className="button" onClick={() => this.pressButton(3)}>3</button>  
                <button className="button" onClick={() => this.pressButton('+')}> +</button>  
                <br/> <br/>   
                <button className="button" onClick={() => this.empty()}>C</button>  
                <button className="button" onClick={() => this.pressButton(0)}>0</button>  
                <button className="button" onClick={() => this.calculate()}> =</button>
                <button className="button" style={{padding: "20px 22px"}} onClick={() => this.pressButton('/')}> /</button>  

                <br/>   
                <h4 style={{textAlign: "center", marginTop: "15px"}}>Create by <a style={{textDecoration:"none", color:"rgb(102, 100, 233)"}} href="https://aliraza-chandio.github.io">Ali Raza</a></h4>
             </div>
        );
    }
}
export default Calculator;