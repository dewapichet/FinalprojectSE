import React from 'react'
import Button from 'react-bootstrap/Button';
import './All.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home() {
    return (
        <form >
        <header className='Login-header'>
        <div>
            <div class="mb-3">
            <Link to="/Login">
            <Button type="button" className="btn btn-success" >Login</Button>
            </Link>
            </div>
            <div class="mb-3">
            <Button type="button" className="btn btn-danger">Logout</Button>
            </div>
        
        </div>
        </header>
        </form>
        
    )
}