import React from 'react';
import './List.scss'
import ListItem from "./ListItem";

const List = (props) => {

    return (
        <ul className="list">
            <ListItem description="Continent code:" value={props.data.continent_code} />
            <ListItem description="Country:" value={props.data.country_name} />
            <ListItem description="Country capital:" value={props.data.country_capital} />
            <ListItem description="Country code:" value={props.data.country_code} />
            <ListItem description="Country code (ISO3):" value={props.data.country_code_iso3} />
            <ListItem description="Country population:" value={props.groupNumbers(props.data.country_population)} />
            <ListItem description="Country area:" value={props.groupNumbers(props.data.country_area)} />
            <ListItem description="Country TLD (top-level domain):" value={props.data.country_tld} />
            <ListItem description="Languages:" value={props.data.languages} />
            <ListItem description="Telephone prefix:" value={props.data.country_calling_code} />
            <ListItem description="Postal:" value={props.data.postal ? props.data.postal : 'sorry can\'t find'} />
            <ListItem description="Region:" value={props.data.region} />
            <ListItem description="City:" value={props.data.city} />
            <ListItem description="Timezone:" value={props.data.timezone} />
            <ListItem description="UTC:" value={props.data.utc_offset} />
            <ListItem description="Currency (ISO 4217):" value={props.data.currency} />
            <ListItem description="Currency name:" value={props.data.currency_name} />
            <ListItem description="Inet provider:" value={props.data.org} />
            <ListItem description="Protocol version:" value={props.data.version} />
        </ul>
    )
}

export default List;