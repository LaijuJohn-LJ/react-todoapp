
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import List from './Component/List';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
<>
{/* 
<About/>
     <List/> */}
     <Router>
     <Header/>
       <Route path="/" exact component={List}/>
       <Route path="/About" component={About}/>
       <Route path="/Contact" component={Contact}/>
     </Router>
  </>  
  );
}

export default App;
