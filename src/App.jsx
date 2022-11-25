import "./App.css";
import Result from "./components/container/Result/Result";
import Functions from "./components/container/Functions/Functions";
import MathOperators from "./components/container/MathOperators/MathOperators";
import Numbers from "./components/container/Numbers/Numbers";
import { useState } from "react";

function App() {

  const [stack, setStack] = useState("0")

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <div className="App-calc">
          <Result value={stack.toString()}></Result>
          <div className="App-calc-content">
            <Numbers onClickHandler={(number) => {setStack(stack==="0" ? number : `${stack}${number}`)}}></Numbers>
            <MathOperators mathOperation={(operator)=> setStack(stack+operator)} equalOperation={()=> setStack(eval(stack).toString())}></MathOperators>
          </div>
          <div className="App-calc-functions">
            <Functions resetFunction={()=> setStack("0")} deleteFunction={()=> setStack(stack.substring(0,stack.length - 1))}></Functions>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
