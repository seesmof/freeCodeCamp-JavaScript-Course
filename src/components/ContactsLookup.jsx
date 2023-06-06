import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlinePhone } from "react-icons/ai";
import { RiHeartsLine } from "react-icons/ri";

const ContactsLookup = () => {
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
    {
      firstName: "John",
      lastName: "Doe",
      number: "1234567890",
      likes: ["Coffee", "Reading", "Travel"],
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      number: "9876543210",
      likes: ["Art", "Yoga", "Nature"],
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      number: "5555555555",
      likes: ["Basketball", "Music", "Photography"],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const ContactCard = ({ contact }) => {
    const handleCopyClick = (value) => {
      navigator.clipboard.writeText(value);
    };

    const [isFilled, setIsFilled] = useState(false);
    const handleHeartButtonClick = () => {
      setIsFilled(!isFilled);
    };

    return (
      <div className="col-span-1 flex flex-col gap-4 rounded-lg bg-slate-800 p-4 text-slate-300">
        <div className="flex flex-row items-center justify-between text-slate-50">
          <h2 className="text-xl font-bold">
            {contact.firstName} {contact.lastName}
          </h2>
          <button
            className={`cursor-pointer text-2xl duration-500 ease-in-out hover:text-red-500 ${
              isFilled ? "text-red-500" : ""
            }`}
            onClick={handleHeartButtonClick}
          >
            {isFilled ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p
            className="flex cursor-pointer flex-row items-center gap-1.5"
            onClick={() => handleCopyClick(contact.number)}
          >
            <AiOutlinePhone className="text-2xl" /> {contact.number}
          </p>
          <p className="flex flex-row items-center gap-1.5">
            <RiHeartsLine className="text-xl text-slate-50" />{" "}
            {contact.likes.join(", ")}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="section-template">
        <h2 className="section-heading">Contacts Lookup</h2>

        <input
          type="text"
          className="input-field-underline mb-4 w-full"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="search-addon"
          id="search-addon"
          name="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredContacts.map((contact) => (
            <ContactCard key={contact.number} contact={contact} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactsLookup;
