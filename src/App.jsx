import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcepts/CoreConcept.jsx";
import TabButton from "./components/SelectedButton/selectedButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(clickButton) {
    setSelectedTopic(clickButton);
  }

  let tabContent = <p>Choose The Topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
