import React, {useState} from 'react'

const FunctionnalCounter = () => {

    const [count , setCounter] = useState(0) ;

    const [inputValue , setInput] = useState("") ;


    const [formData , setForm] = useState({
    
    name:"" ,
    email:"",
    password:""


    })

    const [users , setUsers] = useState([])


     const increment = () => setCounter(count+1) ;

     const decrement = () =>  count> 0 ? setCounter(count - 1) : null  ; 


    const changeInput = (e) => setInput(e.target.value) ;



    return (
        <div>
            <input type="text" placeholder="enter a message" onChange={changeInput}/> <br/>
            <p>{inputValue}</p>

            <button className="btn btn-success" onClick={increment}>+</button>
             <span style={{margin:"20px"}}>{count}</span>
            <button className="btn btn-danger" onClick={decrement}>-</button> <br/>


            <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control"  onChange={(e)=>setForm({...formData , name : e.target.value })} name="name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control"   onChange={(e)=>setForm({...formData , email : e.target.value })}name="email" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">

<label class="form-label" for="password">Password</label> <br/>

    <input type="password" name="password" class="form-label"  onChange={(e)=>setForm({...formData , password: e.target.value })} id="exampleCheck1"/>
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>









        </div>
    )
}

export default FunctionnalCounter
