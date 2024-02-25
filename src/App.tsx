// import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";

function App() {
  // let items = ["G2", "FNC", "MDR", "SKT", "KR"];
  //
  // const handleSelectedItems = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      <Alert>
        My super <h2>alert</h2>
      </Alert>
    </div>

    // <div>
    //   <ListGroup
    //     items={items}
    //     heading={"E-sport"}
    //     onSelectItem={handleSelectedItems}
    //   />
    // </div>
  );
}

export default App;
