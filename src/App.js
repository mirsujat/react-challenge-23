import './App.css';
import Challenge from './Components/Challenge/Challenge';




const  App = () => {
  return (
    <div className="App">
    <h3>Hello world From App</h3>
    <Challenge>
      <div label='one'>
      <h2>1111111111111111111</h2>
      </div>
      <div label='two'>
      <h2>2222222222222</h2>
      </div>
      <div label='three'>
      <h2>3333333333333</h2>
      </div>
    </Challenge>
    </div>
  );
}

export default App;
