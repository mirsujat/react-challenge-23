import './App.css';
import Tabs from './Components/Tabs/Tabs';


const  App = () => {
  return (
    <div className="App">
      Hello world From App

      <Tabs>
        <div label="Hello">
          <p>Tab one content</p>
        </div>
        <div label="World">
          <p> Tab two content</p>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
