import './App.css';
import { BrowserRouter, Route , Routes } from "react-router-dom";

import FormProduct from './components/product/FormProduct';
import FormEditProduct from './components/product/FormEditProduct';
import TastRedux1 from './components/TastRedux1';
import TastRedux2 from './components/TastRedux2';

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Form CRUD</h1>


      {/* <Routes>
        <Route path='/' element={<FormProduct />}/>
        <Route path='/edit/:id' element={<FormEditProduct />}/>
      </Routes> */}

      <TastRedux1 />
      <hr/>
      <TastRedux2 />
      <hr/>



    </div>
    </BrowserRouter>
  );
}

export default App;
