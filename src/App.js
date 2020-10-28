
import './App.css';
import Header from './Header.js'
import RenderItems from './RenderItems.js'
import Data from './Data.js'
function App() {
  return (
    <>
      <Header />

      <div className='main'>
        <RenderItems Data={Data}
          horns={Data.horns} />
      </div>
    </>
  );
}

export default App;
