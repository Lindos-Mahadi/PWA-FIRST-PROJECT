import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link ><Link to="/about" >About</Link></Nav.Link>
                  <Nav.Link><Link to="/users">Users</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
          
        <Switch>
          <Route path="/about" component={About} ></Route>
          <Route path="/users" component={Users} ></Route>
          <Route path="/" component={Home} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
