import ListGroup from "./components/ListGroup.tsx";

function App() {
  let items = ["G2", "FNC", "MDR", "SKT", "KR"];

  const handleSelectedItems = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"E-sport"}
        onSelectItem={handleSelectedItems}
      />
    </div>
  );
}

export default App;
