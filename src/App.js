import './App.css';
import TestTab from './Components/TestTab/TestTab';








const  App = () => {
  return (
    <div className="App">
      Hello world From App
         <TestTab>
          <div label="one">
            <p>this is content of tab one</p>
          </div>
         <div label="two">
            <p>this is content of tab two</p>
          </div>
           <div label="three">
            <p>this is content of tab three</p>
          </div>
         </TestTab>
    </div>
  );
}

export default App;
