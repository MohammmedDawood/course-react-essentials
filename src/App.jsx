import React, { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTab, setSelectedTab] = useState("components");
  function handleSelect(selectedTab) {
    console.log("select tab", selectedTab);
    setSelectedTab(selectedTab);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h1>Core Concepts</h1>
          <ul>
            {CORE_CONCEPTS.map((coreConcept, index) => (
              <CoreConcept
                key={index}
                title={coreConcept.title}
                description={coreConcept.description}
                image={coreConcept.image}
              />
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            <CoreConcept {...CORE_CONCEPTS[2]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
