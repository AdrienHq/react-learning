import { useState } from "react";

function ListGroup() {
  let items = ["Un", "Deux", "Trois", "Quatre"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getListLogic = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>This is my list</h1>
      {getListLogic()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
