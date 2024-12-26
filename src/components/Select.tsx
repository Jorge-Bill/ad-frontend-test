'use client';

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Genre } from '@/types/game';

type SelectProps = {
  options: Genre[];
  onChange: (value: Genre) => void;
  label: string;
  selected: Genre;
};

export default function Select({
  options,
  onChange,
  label,
  selected,
}: SelectProps) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <Label className="text-sm/6 block font-medium text-gray-900">
        {label}
      </Label>
      |
      <div className="relative mt-2">
        <ListboxButton className="sm:text-sm/6 grid min-w-48 cursor-default grid-cols-1 rounded bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:w-full lg:min-w-44">
          <span className="col-start-1 row-start-1 pr-6">{selected.name}</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="text-base sm:text-sm absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        >
          {options.map(option => (
            <ListboxOption
              key={option.id}
              value={option}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <span className="block font-normal group-data-[selected]:font-semibold">
                {option.name}
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
