import './App.css';

import  HeaderBar from './components/HeaderBar/HeaderBar.js'
import  Bannersection from './components/Bannersection/Bannersection.js'

function App() {
return (
<div className="App">
   <header className="App-header">
      <div className='container'>
         <div className='common_boxouter'>
            <div className='common_box'>
               <HeaderBar/>
               <Bannersection/>
            </div>
         </div>
      </div>
   </header>
</div>
);
}
export default App;