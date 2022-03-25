import React from 'react'
import './App.css'
import login from './login.png'

function Login() {
  return (
    <div className='main'>
        <div className='image'>
            <img src={login} width={550} height={400} />
        </div>
        <div className='form1'>
            <p style={{color:'#2B5980',fontSize:25,fontFamily:'Nirmala UI'}}>STUDENT SIGN UP</p>
            <div className='f2'>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Name</p>
            <input type="text" name="name"  className='in1' placeholder='Enter your name' style={{letterSpacing:1.5}}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>College ID</p>
            <input type="text" name="name"  className='in1' placeholder='Enter your college ID' style={{letterSpacing:1.5}}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Password</p>
            <input type="password" name="name"  className='in1' placeholder='Enter your password' style={{letterSpacing:1.5}}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Confirm Password</p>
            <input type="password" name="name"  className='in1' placeholder='Enter your password' style={{letterSpacing:1.5}}/>
            </div>
            <br />
            <button className='btn2' style={{letterSpacing:1.8}}>Sign up</button>
        </div>
    </div>
  )
}

export default Login