import Form from "./components/Form";
import { useRef } from "react";

// Don't change the name of the 'App'
// function and keep it a named export

export default function App() {
  const form = useRef();

  function handleRestart() {
    form.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Reset</button>
      <Form ref={form} />
    </div>
  );
}
