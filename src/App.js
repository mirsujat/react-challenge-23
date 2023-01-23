import './App.css';
import Tabs from './Components/Tabs/Tabs';




const  App = () => {
  return (
    <div className="App">
      Hello world From App
      <Tabs>
        <div label="one">Tab One</div>
        <div label="two">Tab Two</div>
      </Tabs>
    </div>
  );
}

export default App;
