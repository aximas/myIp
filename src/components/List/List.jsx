import React from 'react';
import './List.scss'

const List = (props) => {

    // number will be as a string
    function groupNumbers(number) {
        
    }

    return (
        <ul className="list">
            <li className="list__item">
                <span className="list__text item__description">
                    Continent code:
                </span>
                <span className="list__text item__value">
                    {props.data.continent_code}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Country:
                </span>
                <span className="list__text item__value">
                    {props.data.country_name}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Country code:
                </span>
                <span className="list__text item__value">
                    {props.data.country_code}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Country code (ISO3):
                </span>
                <span className="list__text item__value">
                    {props.data.country_code_iso3}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Telephone prefix:
                </span>
                <span className="list__text item__value">
                    {props.data.country_calling_code}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Region:
                </span>
                <span className="list__text item__value">
                    {props.data.region}
                </span>
            </li>
        </ul>
    )
}

export default List;