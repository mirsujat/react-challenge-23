import './App.css';
import Challenge from './Components/Challenge/Challenge';











const  App = () => {
  return (
    <div className="App">
    <h3>Hello world From App</h3>
    <Challenge>
      <div label='one'>
        <h3>11111111111</h3>
      </div>
      <div label='two'>
        <h3>2222222222</h3>
      </div>
      <div label='three'>
        <h3>3333333333</h3>
      </div>
    </Challenge>

    </div>
  );
}

export default App;
