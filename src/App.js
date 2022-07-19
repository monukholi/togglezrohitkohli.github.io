import './App.css';
import Navbar from './componets/Navbar';
// import Textform from './componets/Textform';
import About from './componets/About';

function App() {
  return (
  <>
    <Navbar title="iCoder" aboutText="About Us"/>
    {/* <Navbar/> */}
    <div className="container my-3">
    {/* <Textform heading="Enter the Text to anyalze brlow"/> */}
    <About/>
    </div>
  </>
  );
}

export default App;
