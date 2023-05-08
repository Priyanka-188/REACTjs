import PropTypes from 'prop-types';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
  <Navbar title="TextFun" about="About" />
  {/* <Navbar/> */}
   </>
  );
}

// Using default props
Navbar.defaultProps ={
  title :"Enter your title here",
  about:"About Us"
}

// Types of props
Navbar.propTypes = {
  title : PropTypes.string,
  about :PropTypes.string

}




export default App;
