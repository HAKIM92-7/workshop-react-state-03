import React, { Component } from 'react'

export default class Counter extends Component {

state = {

count : 0 ,
inputValue : "" ,
chrono : 0 ,
date : "" ,


}

componentDidMount(){

    console.log('the component  is mounted !')
    
    setInterval(()=> {

    this.setState({chrono : this.state.chrono +1});

    if(this.state.chrono ===30){
        alert('30 seconds !')
    }

    let date = new Date();

    this.setState({date : `${17 - date.getHours().toString()} : ${45-date.getMinutes().toString()} : ${60-date.getSeconds().toString()}`})
    
    if(date.getMinutes().toString() == 45) { alert('goumou raw7ou !!!!!') } 

    }, 1000)



}

componentDidUpdate (){

    console.log('the component is updated !')
}

componentWillUnmount() {

console.log('the component is dead !')

}

    render() {
        return (
            <div>

<input type="text" onChange={(e)=> {
    this.setState({inputValue : e.target.value });
    // console.log(e)
    
    }} placeholder="enter a message" style={{marginBottom:"50px"}}/> <br/>




 <p>{this.state.inputValue}</p>

<button type="button" onClick={()=> this.setState({count: this.state.count +1 })} class="btn btn-success" style={{width:"50px"}}>+</button>
<span style={{margin : "10px 30px"}}>{this.state.count}</span>
<button type="button" onClick={() => this.state.count > 0 ? this.setState({count : this.state.count -1 }):alert('stop ! ')} class="btn btn-danger" style={{width : "50px"}}>-</button> <br/>

<p>{this.state.chrono}</p>

<h4>{this.state.date}</h4>

                
            </div>
        )
    }
}
