// import ListGroup from "./components/ListGroup.tsx";
// import Alert from "./components/Alert.tsx";

import Button from "./components/Button.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";

function App() {
  // let items = ["G2", "FNC", "MDR", "SKT", "KR"];
  //
  // const handleSelectedItems = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          My super alert !{" "}
        </Alert>
      )}
      <Button color={"danger"} onClick={() => setAlertVisibility(true)}>
        My super button
      </Button>
    </div>

    // <div>
    //   <Alert>
    //     My super <h2>alert</h2>
    //   </Alert>
    // </div>

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
