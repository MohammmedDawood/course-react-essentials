import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";

function CoreConcepts() {
  return (
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
      </ul>
    </section>
  );
}

export default CoreConcepts;
