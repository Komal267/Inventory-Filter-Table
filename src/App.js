
import './App.css';



import FilteredTable from './table/FilteredTable';
import products from './table/ProductData';

function App() {
  return (
  <div className='App'>
  <FilteredTable products = {products}/>

</div>  );}

export default App;
