import "./App.css";
import Dropdown from "./components/dropdown/Dropdown";
import { useEffect, useState } from "react";
import InfoBox from "./components/infobox/InfoBox";
import data from "../data.json";
import About from "./components/about/About";

function App() {
  const [selected, setSelected] = useState();
  const [person, setPerson] = useState();

  useEffect(() => {
    if (selected) {
      const person = data.construction_workers.find(
        (p) => p.firstname === selected
      );
      setPerson(person);
    }
  }, [selected]);

  return (
    <div className="app">
      <h1>Hello world!</h1>
      <div className="content">
        <div>
          <Dropdown
            persons={data.construction_workers}
            handleOnChange={setSelected}
          ></Dropdown>

          {person ? <InfoBox props={person}></InfoBox> : <></>}
        </div>
        <About
          company={data.construction_company}
          backstory={data.backstory}
          workers={data.construction_workers.length}
        ></About>
      </div>
    </div>
  );
}

export default App;
