import React from 'react'
import Button from 'react-bootstrap/Button';
import './All.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Register from './Register'

export default function Login({navigation}) {
    return (
        <form >
        <header className='Login-header'>
        
        <div>
            
            <div class="mb-3">
                <input type="Username" class="form-control" id="exampleFormControlInput1" placeholder="Username"></input>
            </div>
            <div class="mb-3">
                 <input type="Password" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
            </div>
            <div  >
                
                <div class="mb-3">
                    
                    <Button type="button" className="btn btn-danger" >Login</Button>
                </div>
                <div>
                <Link to="/Register">
                    <Button type="button" className="btn btn-secondary" >Register</Button>
                </Link>
                </div>
            </div>
        </div>
        </header>
        </form>
       
        
    )
}
