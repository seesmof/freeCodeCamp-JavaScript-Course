import React, { useState } from "react";

const Classes = () => {
  class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  }

  const users = [
    new User("XXXX", 30, "XXXXXXXXXXXXXX"),
    new User("XXXXX", 25, "YYYYYYYYYYYYYYY"),
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
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="col-span-1 bg-slate-800 p-4"></div>
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
