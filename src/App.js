import './App.css';
import Challenge from './Components/Challenge/Challenge';


const  App = () => {
  return (
    <div className="App">
      Hello world From App
      <Challenge>
        <div label="one">
            <h1>11111111111</h1>
        </div>
        <div label="two">
            <h1>2222222222</h1>
        </div>
        <div label="three">
            <h1>333333333333</h1>
        </div>
      
      </Challenge>
    </div>
  );
}

export default App;
