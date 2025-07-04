import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const CreateGroup = () => {
  const [category, setCategory] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSelectCategory = (cat) => {
    setCategory(cat);
    setDropdownOpen(false);
  };

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!category) {
      return Swal.fire({
        icon: "warning",
        title: "Please select a hobby category!",
        confirmButtonText: "OK",
      });
    }

    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());

    const newGroup = {
      ...groupData,
      category,
      name: user?.displayName || "",
      email: user?.email || "",
    };

    fetch(`${import.meta.env.VITE_API_URL}/allgroups`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            title: "Group Added Successfully!",
            icon: "success",
          }).then(() => {
            form.reset();
            setCategory("");
            navigate("/mygroup");
          });
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to create group.", "error");
      });
  };

  return (
    <>
      <Helmet>
        <title>Create Group - HobbyHub</title>
        <meta name="description" content="Create a new group on HobbyHub" />
      </Helmet>

      <div className=" mb-8 md:px-20 lg:px-40">
        <h1 className="text-center my-12 text-2xl  font-bold">Create Group</h1>

        <form onSubmit={handleCreateGroup}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset rounded-box p-4">
              <label className="label font-bold text-orange-400 secondary">
                Group Name
              </label>
              <input
                type="text"
                name="groupname"
                className="input w-full"
                placeholder="Enter group name"
                required
              />
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label font-bold text-orange-400 secondary ">
                Image URL
              </label>
              <input
                type="text"
                name="imageurl"
                className="input w-full"
                placeholder="Enter image URL"
                required
              />
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label font-bold text-orange-400 secondary">
                Your Name
              </label>
              <p className="input w-full ">{user?.displayName}</p>
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label font-bold text-orange-400 secondary">
                Your Email
              </label>
              <p className="input w-full">{user?.email}</p>
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label font-bold text-orange-400 secondary">
                Max Members
              </label>
              <input
                type="number"
                name="member"
                className="input w-full"
                placeholder="Enter max members"
                required
              />
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label secondary font-bold text-orange-400">
                Start Date
              </label>
              <input
                type="date"
                name="date"
                className="input w-full"
                required
              />
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label secondary font-bold text-orange-400">
                Meeting Location
              </label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Enter meeting location"
                required
              />
            </fieldset>

            <fieldset className="fieldset rounded-box p-4 ">
              <label className="label secondary font-bold text-orange-400">
                Description
              </label>
              <textarea
                className="textarea w-full"
                name="description"
                placeholder="Write a description"
                required
              ></textarea>
            </fieldset>
          </div>

          {/* Hobby Category Selection */}
          <div className="flex flex-col items-center mt-6">
            {category && (
              <p className="text-lg secondary font-semibold text-orange-400 mb-2">
                Selected Hobby:{" "}
                <span className="text-blue-700">{category}</span>
              </p>
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn"
              >
                {category
                  ? `Change Hobby (${category})`
                  : "Select Hobby Category"}
              </button>

              {dropdownOpen && (
                <ul className="absolute secondary top-full mt-2 bg-orange-400 text-black w-52 p-2 shadow-lg rounded-box z-10">
                  {[
                    "Drawing & Painting",
                    "Web Developing",
                    "Photography",
                    "Video Gaming",
                    "Fishing",
                    "Running",
                    "Cooking",
                    "Reading",
                    "Writing",
                  ].map((hobby) => (
                    <li key={hobby}>
                      <button
                        type="button"
                        onClick={() => handleSelectCategory(hobby)}
                        className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
                      >
                        {hobby}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary secondary mt-10">
              Create Group
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
