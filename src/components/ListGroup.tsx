import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Un", "Deux", "Trois", "Quatre"];

  const getListLogic = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>This is my list</h1>
      {getListLogic()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
