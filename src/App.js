import NavBar from './components/Navbar';
import TextArea from './components/TextArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';

function App() {
  return (
   <>
   <NavBar title="TextUtils"/>
   {/* <TextArea/> */}
   <About/>
   </>
  )
}

export default App;
