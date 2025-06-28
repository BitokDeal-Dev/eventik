'use client'

import React, {useState} from 'react';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CheckIcon, ChevronsUpDownIcon} from 'lucide-react';
import {Command, CommandGroup,
    CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";

const filters = [
    {
        value: "anywhere",
        label: "Всюди",
    },
    {
        value: "city",
        label: "Місто",
    },
    {
        value: "country",
        label: "Країна",
    },

]

const SearchScopeSelector = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(filters[0].value)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className='h-6 px-3 text-muted flex gap-1 items-center bg-muted-foreground rounded-[6px]' >
                    {value
                        ? filters.find((filter) => filter.value === value)?.label
                        : filters[0].label}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </div>

            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {filters.map((filter) => (
                                <CommandItem
                                    key={filter.value}
                                    value={filter.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === filter.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {filter.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default SearchScopeSelector;