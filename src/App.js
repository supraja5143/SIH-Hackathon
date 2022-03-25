import React, { Component } from 'react'
import Home from './Home'
import Proreview from './Proreview'
import './App.css'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import Login from './Login'
import signup from './signup'
import ProjectCards from './Projectcards'
import Collegeprojects from './Collegeprojects'
import Para from './Para'

 class App extends Component {
  render() {
    const navstyle={
      color: 'white',
      textDecoration:'none'

  };
    return (
      <Router>
      <div className="App">
      <nav>
        <ul className='navlink2'>
            <p style={{fontSize:18,color:'orange',fontWeight:550,letterSpacing:1.5}}>AICTE LOGO</p>
            </ul>
            <ul className="navlink">
                    <Link style={navstyle} to='/Home'>
                    <li style={{letterSpacing:1.5}}>HOME</li>
                    </Link>
                    <Link style={navstyle} to='/projects'>
                    <li style={{letterSpacing:1.5}}>PROJECTS</li>
                    </Link>
                    <Link style={navstyle} to='/About'>
                    <li style={{letterSpacing:1.5}}>ABOUT</li>
                    </Link>
                </ul>
                <ul className='navlink1'>
                  <li><BsSearch /></li>
                <Link style={navstyle} to='/login'>
                  <li style={{color:'#00665C',letterSpacing:1.5}}>LOGIN</li>
                </Link>
                </ul>

            </nav>
              <Route path='/Home' exact component={Home} />
              <Route path='/projects' component={Collegeprojects} />
              <Route path='/About' component={Para} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={signup} />
      </div>
      </Router>
    )
  }
}

export default App