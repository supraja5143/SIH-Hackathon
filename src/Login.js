import React from 'react'
import './App.css'
import login from './login.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='main'>
        <div className='image'>
            <img src={login} width={550} height={400} />
        </div>
        <div className='form'>
            <p style={{color:'#2B5980',fontSize:25,fontFamily:'Nirmala UI'}}>LOGIN</p>
            <div className='f1'>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>College ID</p>
            <input type="text" name="name"  className='in1' placeholder='Enter your college ID' style={{letterSpacing:1.5}}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Password</p>
            <input type="password" name="name"  className='in1' placeholder='Enter your password' style={{letterSpacing:1.5}}/>
            </div>
            <br />
            <br />
            <button className='btn' style={{letterSpacing:1.8}}>Login</button>
            <Link  to='/signup' className='signup'>Sign up</Link>
        </div>
    </div>
  )
}

export default Login