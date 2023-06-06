import React, { useState } from "react";
import { RxCross1, RxPencil1 } from "react-icons/rx";
import { BiCake } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

// TODO: Add a box form for adding new users. Add different image for each user

const Classes = () => {
  class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  }

  const [users, setUsers] = useState([
    new User("Jane Doe", 30, "jane@doe.com"),
    new User("John Doe", 25, "john@doe.com"),
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const removeUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const editUser = (name, age, email) => {
    const editedUser = new User(name, age, email);
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers([...filteredUsers, editedUser]);
    setSearchQuery("");
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const userCard = (name, age, email) => (
    <>
      <div className="col-span-1 flex flex-row gap-4 rounded-lg bg-slate-800 p-4">
        <img
          src="https://picsum.photos/200/300"
          alt="personal avatar image"
          className="h-12 w-12 min-w-max rounded-full"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="flex flex-row items-center gap-2">
              <RxPencil1 className="text-lg text-slate-500" />
              <RxCross1
                className="cursor-pointer text-lg text-red-500"
                onClick={() => removeUser(name)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 font-medium">
            <div
              className="flex cursor-pointer flex-row items-center gap-1 text-slate-300"
              title="User's Age"
              onClick={() => copyToClipboard(age)}
            >
              <BiCake className=" text-lg text-pink-500" />
              <p>{age}</p>
            </div>
            <div
              title="User's Email"
              className="flex cursor-pointer flex-row items-center gap-1 text-slate-300"
              onClick={() => copyToClipboard(email)}
            >
              <AiOutlineMail className=" text-lg text-blue-500" />
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <section className="section-template">
        <h2 className="section-heading">Classes</h2>

        <input
          type="text"
          placeholder="Search..."
          className="input-field-underline mb-4 w-full"
          onChange={handleChange}
          value={searchQuery}
        />

        <div className="grid-section">
          {filteredUsers.map((user) =>
            userCard(user.name, user.age, user.email)
          )}
        </div>
      </section>
    </>
  );
};

export default Classes;
