import React from 'react'
import Button from 'react-bootstrap/Button';
import './All.css';
import Dropdown from 'react-bootstrap/Dropdown';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Register() {
    return (
        <form className='Login-header'>
            <p >Register</p>
        <header>
            <div>
            
                <div class="mb-3">
                    <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="ชื่อ-นามสกุล"></input>
                </div>
                <div class="mb-3">
                    <input type="UID" class="form-control" id="exampleFormControlInput1" placeholder="รหัสประจำตัวประชาชน"></input>
                </div>
                <div class="mb-3">
                    <input type="UID" class="form-control" id="exampleFormControlInput1" placeholder="เบอร์โทร"></input>
                </div>
                <div class="mb-3">
                    <input type="Username" class="form-control" id="exampleFormControlInput1" placeholder="Username"></input>
                </div>
                <div class="mb-3">
                    <input type="Password" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
                </div>
                <div class="mb-3">
                    <input type="Confirm" class="form-control" id="exampleFormControlInput1" placeholder="Confirm Password"></input>
                </div>
            <div class="btn-group mb-3 mx-5" >
            <Dropdown class="mx-1">
            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                อำเภอ
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item >5555</Dropdown.Item>
                <Dropdown.Item >6666</Dropdown.Item>
                <Dropdown.Item >7777</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown class="mx-1">
            <Dropdown.Toggle variant="success" id="dropdown-basic" class="mx-3">
                จังหวัด
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item >Action</Dropdown.Item>
                <Dropdown.Item >Another action</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>

            <div class="mb-3" >
            <Link to="/Login">
            <Button type="button" className="btn btn-secondary mx-4" >Cancel</Button>
            </Link>
            <Link to="/Login">
            <Button type="button" className="btn btn-danger mx-4"  >Confirm</Button>
            </Link>
            </div>
        </div>
        </header>
        </form>
        
    )
}
