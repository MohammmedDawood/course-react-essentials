import React, { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTab, setSelectedTab] = useState("");
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

          {selectedTab === "components" && (
            <div className='example'>
              <h3>Components</h3>
              <p>
                Components are the building blocks of React applications. A
                component is a piece of the user interface. It can be a button,
                a form, a header, or anything else that you see on the screen.
              </p>
            </div>
          )}
          {selectedTab === "jsx" && (
            <div className='example'>
              <h3>JSX</h3>
              <p>
                JSX is an extension of JavaScript that allows us to write HTML
                inside of our JavaScript. It is a syntax extension that looks
                like HTML and is compiled to regular JavaScript at runtime.
              </p>
            </div>
          )}
          {selectedTab === "props" && (
            <div className='example'>
              <h3>Props</h3>
              <p>
                Props are short for properties and are used to pass data between
                components. They are immutable, which means that the data passed
                in cannot be changed by the component receiving the props.
              </p>
            </div>
          )}
          {selectedTab === "state" && (
            <div className='example'>
              <h3>State</h3>
              <p>
                State is an object that stores data for a component. It is
                mutable, which means that it can be changed by the component
                that owns it.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
