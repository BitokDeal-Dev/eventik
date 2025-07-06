'use client'

import React, {useEffect} from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {useLocationStore} from "@/modules/location/store/location.store";


export const AutoComplete = ({isLoaded}:{isLoaded:boolean}) => {
    const {
        ready,
        value,
        init,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        callbackName: "google.maps.__ib__",
        initOnMount: false,
        debounce: 300,
    });
    const {setLocation} = useLocationStore()
    const ref = useOnclickOutside(() => {
        // When the user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    useEffect(() => {
        if(isLoaded){
            init()
        }

    }, [isLoaded]);

    const handleInput = (e:any) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }:{description:any}) =>
            () => {
                // When the user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    setLocation({lat, lng});
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} className='text-left px-3 py-2 cursor-pointer hover:bg-foreground/10' onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <div className='w-full' ref={ref}>
            <input
                className='w-full border-2 border-foreground p-3 rounded-lg font-bold text-xl'
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Де ви знаходетесь?"
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" && <ul className='bg-section rounded-lg overflow-hidden max-w-[530px]'>{renderSuggestions()}</ul>}
        </div>
    );
};

