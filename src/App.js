
import './App.css';
import Header from './Header.js'
import RenderItems from './RenderItems.js'
function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <RenderItems />
      </div>
    </>
  );
}

export default App;
