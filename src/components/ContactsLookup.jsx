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
  ];

  const handleCopyClick = (value) => {
    navigator.clipboard.writeText(value);
  };

  const ContactCard = ({ contact }) => {
    return (
      <div className="col-span-1 flex flex-col gap-4 rounded-lg bg-slate-800 p-4 text-slate-300">
        <div className="flex flex-row items-center justify-between text-slate-50">
          <h2 className="text-xl font-bold">
            {contact.firstName} {contact.lastName}
          </h2>
          <AiOutlineHeart className="cursor-pointer text-2xl" />
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
      <section class="section-template">
        <h2 class="section-heading">Contacts Lookup</h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((contact) => (
            <ContactCard key={contact.number} contact={contact} />
          ))}
        </div>
      </section>{" "}
    </>
  );
};

export default ContactsLookup;
