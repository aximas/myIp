import React from 'react';
import './List.scss'

const List = (props) => {

    // number will be as a string
    function groupNumbers(number) {
        let groupedNumbers = '';
        let numAsStringReverse = '';

        if (!isNaN(number)) {
            numAsStringReverse = number.toString().split("").reverse().join("");
        } else {
            numAsStringReverse = number.split("").reverse().join("");
        }

        for (let i = numAsStringReverse.length - 1; i > -1; i--) {
            let realLength = i + 1;
            if (!(realLength % 3)) {
                groupedNumbers += ` ${numAsStringReverse[i]}`;
            } else {
                groupedNumbers += numAsStringReverse[i];
            }
        }

        return groupedNumbers;
    }

    function displayTimezone(utc) {
        let delimiterIndexOf = utc.length - 3;
        let utcWithDelimiter = '';
        for (let i = 0; i < utc.length; i++) {
            if (i === delimiterIndexOf) {
                utcWithDelimiter += `${utc[i]}:`;
            } else  {
                utcWithDelimiter += utc[i];
            }
        }
        return utcWithDelimiter;
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
                    Country capital:
                </span>
                <span className="list__text item__value">
                    {props.data.country_capital}
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
                    Country population:
                </span>
                <span className="list__text item__value">
                    {groupNumbers(props.data.country_population)} people
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Country area:
                </span>
                <span className="list__text item__value">
                    {groupNumbers(props.data.country_area)} km<sup>2</sup>
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Country TLD (top-level domain):
                </span>
                <span className="list__text item__value">
                    {props.data.country_tld}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Languages:
                </span>
                <span className="list__text item__value">
                    {props.data.languages}
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
                    Postal:
                </span>
                <span className="list__text item__value">
                    {props.data.postal ? props.data.postal : 'sorry can\'t find'}
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
            <li className="list__item">
                <span className="list__text item__description">
                    City:
                </span>
                <span className="list__text item__value">
                    {props.data.city}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Timezone:
                </span>
                <span className="list__text item__value">
                    {props.data.timezone}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    UTC:
                </span>
                <span className="list__text item__value">
                    {displayTimezone(props.data.utc_offset)}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Currency (ISO 4217):
                </span>
                <span className="list__text item__value">
                    {props.data.currency}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Currency name:
                </span>
                <span className="list__text item__value">
                    {props.data.currency_name}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Inet provider:
                </span>
                <span className="list__text item__value">
                    {props.data.org}
                </span>
            </li>
            <li className="list__item">
                <span className="list__text item__description">
                    Protocol version:
                </span>
                <span className="list__text item__value">
                    {props.data.version}
                </span>
            </li>
        </ul>
    )
}

export default List;