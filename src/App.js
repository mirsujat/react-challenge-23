import './App.css';
import Tabs from './Components/Tabs/Tabs';







const  App = () => {
  return (
    <div className="App">
    <h3>Hello world From App</h3>
     
      <Tabs>
        <div label='personal Address'>
          <h1>11111111111111</h1>
        </div>
         <div label='shipping address'>
          <h1>22222222222</h1>
        </div>
         <div label='payment'>
          <h1>33333333333333</h1>
        </div>
      </Tabs>

    </div>
  );
}

export default App;
