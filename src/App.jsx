import Arrays from "./components/Arrays";
import Assignments from "./components/Assignments";
import Classes from "./components/Classes";
import Constants from "./components/Constants";
import ContactsLookup from "./components/ContactsLookup";
import Hero from "./components/Hero";
import JsonPlaceholderFetchTesting from "./components/JsonPlaceholderFetchTesting";
import MultidimensionalArrays from "./components/MultidimensionalArrays";
import StringVariables from "./components/StringVariables";
import Variables from "./components/Variables";

function App() {
  return (
    <>
      <div class="mx-auto max-w-6xl p-4 sm:p-6">
        <Hero />
        <main class="flex flex-col gap-4 py-4 sm:gap-6 sm:py-6">
          <JsonPlaceholderFetchTesting />

          <Variables />
          <Assignments />
          <StringVariables />
          <Constants />
          <Arrays />
          <ContactsLookup />
          <MultidimensionalArrays />
          <Classes />
        </main>
      </div>
    </>
  );
}

export default App;
