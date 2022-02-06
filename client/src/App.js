import "./App.css";
import Information from "./components/information/bootstrap";
import TwoDemo from "./components/twoJs/twoexample";

function App() {
  // .twoexample,.bootstrap{
  //   height:100%;
  //   width:50%;
  //   position: absolute;
  //   z-index: 1;
  // }
  
  // .twoexample{
  //   left:0;
  //     color: red;
  //     background: chartreuse;
  //     border: solid 5px;
  //     border-color: azure;
  // }
  
  // .bootstrap{
  //   right: 0;
  //     color: white;
  //     background: black;
  // }
  return (
    <div>
      <TwoDemo />
      <Information />
    </div>
  );
}

export default App;
