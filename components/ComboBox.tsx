"use client";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

const people = [
  {
    name: "Durward Reynolds",
    id: 0,
    image:
      "https://storage.googleapis.com/imgfunnels.com/assets/robot-transparent-cropped-386.png"
  },
  {
    name: "Kenton Towne",
    id: 1,
    image:
      "https://storage.googleapis.com/imgfunnels.com/assets/robot-transparent-cropped-386.png"
  },
  {
    name: "Therese Wunsch",
    id: 2,
    image:
      "https://storage.googleapis.com/imgfunnels.com/assets/robot-transparent-cropped-386.png"
  },
  {
    name: "Benedict Kessler",
    id: 3,
    image:
      "https://storage.googleapis.com/imgfunnels.com/assets/robot-transparent-cropped-386.png"
  },
  {
    name: "Katelyn Rohan",
    id: 4,
    image:
      "https://storage.googleapis.com/imgfunnels.com/assets/robot-transparent-cropped-386.png"
  }
];

type Person = {
  name: string;
  id: number;
  image: string;
};

export default function MyCombobox() {
  const [personId, setPersonId] = useState<number>();
  const [selectedPerson, setSelectedPerson] = useState<Person>();
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="flex flex-col justify-center items-start">
      <label className="font-semibold mb-2">Assign To: {personId}</label>
      <div className="relative w-full">
        <Combobox
          nullable
          value={selectedPerson}
          onChange={(person: Person) => {
            setSelectedPerson(person);
            setPersonId(person?.id);
          }}
        >
          <div className="flex space-x-2">
            {selectedPerson ? (
              <>
                <Image
                  height="48"
                  width="48"
                  alt="User image"
                  className="rounded-full h-12 w-12"
                  src={
                    selectedPerson.image
                      ? selectedPerson.image
                      : "https://storage.googleapis.com/imgfunnels.com/assets/robot-transparent-cropped-386.png"
                  }
                />
              </>
            ) : (
              <>
                <div className="rounded-full bg-stone-300">
                  <div className="h-12 w-12 flex items-center justify-center text-sm">
                    N/a
                  </div>
                </div>
              </>
            )}
            <Combobox.Input
              className="block w-full cursor-text rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-offset-0"
              // Stateful classes: focus:outline-none focus-visible:border-dreamsickle-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dreamsickle-300
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              onFocus={(e) => {
                setQuery("");
              }}
              displayValue={(person: any) =>
                person ? (person.name ? person.name : person.email) : ""
              }
            />
          </div>

          <Combobox.Options
            className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
          >
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople?.map((person: any) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  className={`px-3 py-1 hover:bg-stone-100 cursor-default whitespace-nowrap overflow-clip text-ellipsis`}
                >
                  {person.name ? person.name : person.email}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Combobox>
      </div>
    </div>
  );
}
