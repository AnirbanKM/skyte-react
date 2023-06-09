import React, { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';


const MultiSelectComponent = ({ value, readonly }) => {

    const [country, setCountry] = useState([
        {
            country: 'India',
            key: 1
        },
        {
            country: 'Japan',
            key: 2
        },
        {
            country: 'United States',
            key: 3
        },
        {
            country: 'Thailand',
            key: 4
        },
        {
            country: 'Russia',
            key: 5
        },
        {
            country: 'France',
            key: 6
        },
        {
            country: 'Denmark',
            key: 7
        }
    ]);

    const [matchValue, setMatchValue] = useState([]);

    useEffect(() => {

        const intersection = country.filter(element => value.includes(element.key));
        setMatchValue(intersection);

    }, []);

    return (
        <Multiselect
            disablePreSelectedValues={readonly}
            displayValue="country"
            showCheckbox
            options={country}
            selectedValues={matchValue}
        />
    )
}

export default MultiSelectComponent;