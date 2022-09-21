
import './App.css';
import './index.css';
import  Navbar from './Navbar';
import Home from './pages/Home';
import Books from './pages/Books';

function App() {
  let component
  switch (window.location.pathname){
    case "/home":
      component = <Home />
      break
    case "/books":
      component = <Books />
      break;
    }
  
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
