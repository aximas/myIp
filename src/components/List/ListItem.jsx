import React from "react";
import './List.scss';

const ListItem = (props) => {
    return <li className="list__item">
                <span className="list__text item__description">
                    {props.description}
                </span>
                 <span className="list__text item__value">
                    {props.value}
                </span>
            </li>
}

export default ListItem;