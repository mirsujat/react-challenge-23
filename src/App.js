import './App.css';
import Accordion from './Components/Accordion/Accordion';






const  App = () => {
  return (
    <div className="App">
      Hello world From App
         <Accordion>
            <div label="one" >
              <div>Accordion one</div>
              <div>Accordion one</div>
            </div>
            <div label="two">
              <div>Accordion two</div>
              <div>Accordion two</div>
            </div>
            <div label="three">Accordion three</div>
         </Accordion>
    </div>
  );
}

export default App;
