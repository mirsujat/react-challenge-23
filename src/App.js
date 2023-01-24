import './App.css';
import Tabs from './Components/Tabs/Tabs';




const  App = () => {
  return (
    <div className="App">
      Hello world From App
      <Tabs>
        <div label="tab one">Tab ....one content</div>
        <div label="tab two">Tab two... content</div>
      </Tabs>
    </div>
  );
}

export default App;
