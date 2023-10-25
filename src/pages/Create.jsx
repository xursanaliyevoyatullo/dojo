import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const api = "http://localhost:3000/tickets";
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPrority] = useState("low");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(api, {
        title,
        user_email: email,
        priority,
        body,
      })
      .then((data) => data)
      .then((err) => err);
    navigate("/tickets");
  };
  return (
    <div className="flex items-center gap-5 flex-col">
      <h1 className="text-2xl font-bold text-primary mt-5">Add New Ticket</h1>
      <form
        className="bg-white items-center gap-5 flex flex-col max-w-[300px] w-full py-4 px-3 rounded"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="bg-white flex flex-col gap-1 w-full">
          <span className="bg-white font-medium">Title</span>
          <input
            className="bg-white input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label className="bg-white flex flex-col gap-1 w-full">
          <span className="bg-white font-medium">Title Bio</span>
          <textarea
            className="bg-white textarea textarea-xs max-w-[320px] textarea-bordered"
            placeholder="Bio.."
            required
            onChange={(e) => {
              setBody(e.target.value);
            }}
          >
          </textarea>
        </label>

        <label className="bg-white flex flex-col gap-1 w-full">
          <span className="bg-white font-medium">Ticket prority:</span>
          <select
            className="bg-white select select-bordered w-full max-w-xs"
            onChange={(e) => {
              setPrority(e.target.value);
            }}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </label>
        <button to="/tickets" className="btn btn-primary btn-sm">
          Add Ticket
        </button>
      </form>
    </div>
  );
}

export default Create;