function ListGroup() {
    const items = ['Un', 'Deux', 'Trois', 'Quatre'];

    const getListLogic = () => {
        return items.length === 0 ? <p>No item found</p> : null;
    }

    return (
        <>
            <h1>This is my list</h1>
            {getListLogic()}
            <ul className="list-group">
                {items.map((item) =>
                    <li key={item}>{item}</li>)
                }
            </ul>
        </>

    );
}

export default ListGroup;