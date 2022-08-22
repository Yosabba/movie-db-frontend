import React, { useState } from 'react';
import axios from 'axios';


const AddMovie = () => {
  const [formState, setFormState] = useState({
    title: "",
    duration: 0,
    description: "",
    rating: "",
    imgUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const postMovie = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://serene-peak-15457.herokuapp.com/movies/",
        {
          title: formState.title,
          runtime_in_minutes: formState.duration,
          description: formState.description,
          rating: formState.rating,
          img_url: formState.imgUrl,
        }
      );
      console.log(response);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <>
      <h1 className="text-right">Add your favorite movie to the database</h1>
      <form className="flex justify-center flex-col w-2/12">
        <label htmlFor="title">Title</label>
        <input
          className="border-slate-200 border-2 rounded"
          type="text"
          name="title"
          id="title"
          value={formState.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className="border-slate-200 border-2 rounded"
          name="description"
          id="description"
          value={formState.description}
          onChange={handleChange}
        />
        <label htmlFor="duration">Duration</label>
        <input
          className="border-slate-200 border-2 rounded"
          type="number"
          name="duration"
          id="duration"
          value={formState.duration}
          onChange={handleChange}
        />

        <label htmlFor='ratings'>Rating</label>
        <input
          className="border-slate-200 border-2 rounded"
          type="text"
          name="rating"
          id="rating"
          value={formState.rating}
          onChange={handleChange}
        />
        <label htmlFor="imgUrl">Image URL</label>
        <input
          className="border-slate-200 border-2 rounded"
          type="url"
          name="imgUrl"
          id="imgUrl"
          value={formState.imgUrl}
          onChange={handleChange}

        />
      </form>
    </>
  );
};

export default AddMovie;
