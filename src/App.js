import './App.css';
import Tabs from './Components/Tabs/Tabs';







const  App = () => {
  return (
    <div className="App">
      Hello world From App
      <Tabs>
        <div label='one'>
          <h1>11111111111111</h1>
        </div>
         <div label='two'>
          <h1>22222222222</h1>
        </div>
         <div label='three'>
          <h1>33333333333333</h1>
        </div>
      </Tabs>

    </div>
  );
}

export default App;
