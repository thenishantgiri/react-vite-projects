import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 bg-cyan-700 p-4 rounded">
        Tailwind Props
      </h1>

      <Card username="Sarah" btnText="View Profile" />
      <Card username="Joey" btnText="Click Me" />
    </>
  );
}

export default App;
