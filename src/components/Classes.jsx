import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Classes = () => {
  class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  }

  const users = [
    new User("Jane Doe", 30, "jane@doe.com"),
    new User("John Doe", 25, "john@doe.com"),
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const userCard = (name, age, email) => (
    <>
      <div className="col-span-1 flex flex-row gap-3 rounded-lg bg-slate-800 p-4">
        <img
          src="https://picsum.photos/200/300"
          alt="personal avatar image"
          className="h-12 w-12 rounded-full"
        />

        <div className="flex w-full flex-col">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="flex flex-row gap-2">
              <BsPencil className="text-lg text-slate-300" />
              <RxCross1 className="text-lg text-slate-300" />
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
