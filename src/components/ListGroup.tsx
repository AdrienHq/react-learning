import { useState } from "react";

interface ListProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getListLogic = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
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
