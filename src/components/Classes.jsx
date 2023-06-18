import React, { useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
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
    new User("Charlie Edwards", 42, "charlie.edwards756@hotmail.com"),
    new User("Eva Graham", 50, "eva.graham688@yahoo.com"),
    new User("Alice Chen", 66, "alice.chen772@gmail.com"),
    new User("Bob Anderson", 59, "bob.anderson322@hotmail.com"),
    new User("Gina Davis", 48, "gina.davis115@outlook.com"),
    new User("Frank Brown", 44, "frank.brown739@yahoo.com"),
    new User("David Foster", 65, "david.foster201@hotmail.com"),
    new User("Charlie Foster", 49, "charlie.foster605@outlook.com"),
    new User("Charlie Graham", 59, "charlie.graham182@hotmail.com"),
    new User("Charlie Anderson", 52, "charlie.anderson185@gmail.com"),
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

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const userCard = (name, age, email) => (
    <>
      <div className="bg-slate-800 flex flex-row col-span-1 gap-4 p-4 overflow-hidden rounded-lg">
        <img
          src="https://picsum.photos/200/300"
          alt="personal avatar image"
          className="shrink-0 grow-0 w-12 h-12 rounded-full"
        />
        <div className="flex flex-col flex-1">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <RxCross1
              className="hover:text-red-600 text-lg text-red-500 duration-500 cursor-pointer"
              onClick={() => removeUser(name)}
            />
          </div>
          <div className="flex flex-row gap-4 font-medium">
            <div
              className="text-slate-300 flex flex-row items-center gap-1 cursor-pointer"
              title={"User's Age - " + age}
              onClick={() => copyToClipboard(age)}
            >
              <BiCake className=" text-lg text-pink-500" />
              <p>{age}</p>
            </div>
            <div
              title={"User's Email - " + email}
              className="text-slate-300 flex flex-row items-center gap-1 cursor-pointer"
              onClick={() => copyToClipboard(email)}
            >
              <AiOutlineMail className="text-lg text-blue-500" />
              <p className="lg:block hidden">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const inputUsername = useRef(null);
  const inputAge = useRef(null);
  const inputEmail = useRef(null);
  const formSubmitted = useState(false);

  const [data, setData] = useState({});

  return (
    <>
      <section className="section-template">
        <h2 className="section-heading">Classes</h2>

        <div className="flex flex-row w-full gap-6">
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800 flex flex-col p-3 rounded-lg">
              <h3 className="lg:text-xl py-2 text-lg font-medium capitalize">
                add new user
              </h3>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="input-field-underline"
                  placeholder="Full Name..."
                  ref={inputUsername}
                />
                <input
                  type="text"
                  className="input-field-underline"
                  placeholder="Age..."
                  ref={inputAge}
                />
                <input
                  type="text"
                  className="input-field-underline"
                  placeholder="Email..."
                  ref={inputEmail}
                />
              </div>

              <button
                className="button button-green lg:mt-6 mt-4"
                onClick={() => {
                  setData({
                    username: inputUsername.current.value,
                    age: inputAge.current.value,
                    email: inputEmail.current.value,
                  });
                  inputUsername.current.value = "";
                  inputAge.current.value = "";
                  inputEmail.current.value = "";
                  setUsers([...users, data]);
                }}
              >
                Add User
              </button>
            </div>
          </div>
          <div className="lg:flex flex-col hidden w-1/2">
            <h3 className="mb-4 text-xl font-medium">Preview</h3>
            {formSubmitted
              ? userCard(data.username, data.age, data.email)
              : null}
          </div>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="input-field-underline w-full mb-4"
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
