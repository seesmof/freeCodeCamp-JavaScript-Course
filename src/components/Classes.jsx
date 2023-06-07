import React, { useEffect, useRef, useState } from "react";
import { RxCross1, RxPencil1 } from "react-icons/rx";
import { BiCake } from "react-icons/bi";
import { AiOutlineMail, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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

  const editUser = (name, age, email) => {
    const editedUser = new User(name, age, email);
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers([...filteredUsers, editedUser]);
    setSearchQuery("");
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [isFilled, setIsFilled] = useState(false);

  const handleHeartButtonClick = () => {
    setIsFilled(!isFilled);
  };

  const userCard = (name, age, email) => (
    <>
      <div className="col-span-1 flex flex-row gap-4 overflow-hidden rounded-lg bg-slate-800 p-4">
        <img
          src="https://picsum.photos/200/300"
          alt="personal avatar image"
          className="h-12 w-12 shrink-0 grow-0 rounded-full"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <RxCross1
              className="cursor-pointer text-lg text-red-500 duration-500 hover:text-red-600"
              onClick={() => removeUser(name)}
            />
          </div>
          <div className="flex flex-row gap-4 font-medium">
            <div
              className="flex cursor-pointer flex-row items-center gap-1 text-slate-300"
              title={"User's Age - " + age}
              onClick={() => copyToClipboard(age)}
            >
              <BiCake className=" text-lg text-pink-500" />
              <p>{age}</p>
            </div>
            <div
              title={"User's Email - " + email}
              className="flex cursor-pointer flex-row items-center gap-1 text-slate-300"
              onClick={() => copyToClipboard(email)}
            >
              <AiOutlineMail className="text-lg text-blue-500" />
              <p className="hidden lg:block">{email}</p>
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

  const [data, setData] = useState({
    username: "",
    age: "",
    email: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setData({
      username: inputUsername.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    inputUsername.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
    formSubmitted(true);
    users.push((prev) => new User(prev.name, prev.age, prev.email));
  };

  return (
    <>
      <section className="section-template">
        <h2 className="section-heading">Classes</h2>

        <div className="flex w-full flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col rounded-lg bg-slate-800 p-3">
              <h3 className="py-2 text-lg font-medium capitalize lg:text-xl">
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
                className="button button-green mt-4 lg:mt-6"
                onClick={handleFormSubmit}
              >
                Add User
              </button>
            </div>
          </div>
          <div className="hidden w-1/2 flex-col lg:flex">
            <h3 className="mb-4 text-xl font-medium">Preview</h3>
            {formSubmitted
              ? userCard(data.username, data.age, data.email)
              : null}
          </div>
        </div>

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
