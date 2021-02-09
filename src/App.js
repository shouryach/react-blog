import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Form from './form';
import Users from './Users';
import{Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import {Nav,Navbar} from 'react-bootstrap';

function App() {

  const [propName,setPropName] = useState('Shourya') 

  return (
    <div className="App">
       <Router>
       <h1>Basic Index Component is running from here. You can change code from src/App.js</h1>
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
        
      </Navbar>
       
        {/* <About propname={propName}/>
        <Contact propname={propName}/>
        <button onClick={()=>{setPropName('Shourya Chowdhury')}}>Update Props</button> */}
        {/* <Form/> */}
        <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
       </Router>
     
    </div>
   
  );
  
}

export default App;
