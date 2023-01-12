import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {AddItem} from './pages/AddItem';
import {Contact} from './pages/Contact';
import { Browse } from './pages/Browse';
 function App(){

 //state

 //comportement



 //affichage

 return<Home/>; (<div>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/addItem" element={<AddItem/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/browse" element={<Browse/>}/>

  </Routes>;

</div>)
}


export default App;