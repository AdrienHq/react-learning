import ListGroup from "./components/ListGroup.tsx";

function App() {
  let items = ["G2", "FNC", "MDR", "SKT", "KR"];

  return (
    <div>
      <ListGroup items={items} heading={"E-sport"} />
    </div>
  );
}

export default App;
