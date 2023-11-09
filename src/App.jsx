import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";

function App() {
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
      </main>
    </div>
  );
}

export default App;
