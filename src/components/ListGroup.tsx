import { useState } from "react";

interface Props {
    topLabel: string;
    items: string[];

    onSelectItem: (item: string, index: number) => void;
}

function ListGroup(props: Props)
{
    const heading = <h1>{props.topLabel}</h1>;

    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    const message = props.items.length == 0 && <p>No item found</p>;
    
    return (
        <>
        {heading}
        {message}
        <ul className="list-group">
            {props.items.map((item, index) => <li
             className={selectedIndex == index ? "list-group-item active" : "list-group-item"}
             key={item} 
             onClick={() => {setSelectedIndex(index); props.onSelectItem(item, index)}}>{item}</li>)}
             
        </ul>
    </>
    );
}

export default ListGroup;