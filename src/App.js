import './App.css';
import Accordion from './Components/Accordion/Accordion';








const  App = () => {
  return (
    <div className="App">
      Hello world From App
      <Accordion>
        <div label="one">
         <input type='text' />
        </div>
        <div label="two">
          <input type='text' />
        </div>
        <div label="three">
          <input type='text' />
        </div>
      
      </Accordion>

    </div>
  );
}

export default App;
