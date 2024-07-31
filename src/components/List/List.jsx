import { useState } from "react";

const List = ({ items }) => {
    const [listItems, setListItems] = useState(items.map(item => ({ ...item, isActive: false })));
    const toggleActive = (key) => {
        setListItems(prevItems =>
            prevItems.map((item) =>
                item.name === key ? { ...item, isActive: !item.isActive } : item
            )
        )
    }
    return (
        <div className="container">
            <ul className="list-group">
                {listItems.map((item) => {
                    let classList = 'list-group-item'
                    item.isActive ? classList = 'list-group-item ' + 'active' : classList = 'list-group-item';
                    return (
                        <li key={item.name} className={classList} onClick={() => toggleActive(item.name)}>
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <span>${item.price}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;