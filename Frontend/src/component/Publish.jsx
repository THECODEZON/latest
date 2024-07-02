import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Publish = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare form data
    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('description', formData.description);
    data.append('image', formData.image);

    // Send the data to your server
    await fetch('/api/books', { // Replace with your API endpoint
      method: 'POST',
      body: data
    });

    // After submission, navigate to the books page
    navigate('/books');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="p-6 bg-slate-700 shadow-md rounded-md w-full max-w-md">
        <h3 className="font-bold text-lg text-center text-white">Publish Book</h3>
        
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mt-4 space-y-2">
            <label className="block">
              <span className="text-white">Title</span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter book title"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            </label>
          </div>
          
          {/* Author */}
          <div className="mt-4 space-y-2">
            <label className="block">
              <span className="text-white">Author</span>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            </label>
          </div>
          
          {/* Description */}
          <div className="mt-4 space-y-2">
            <label className="block">
              <span className="text-white">Description</span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter book description"
                className="w-full px-3 py-2 border rounded-md outline-none"
              ></textarea>
            </label>
          </div>

          {/* Image */}
          <div className="mt-4 space-y-2">
            <label className="block">
              <span className="text-white">Image</span>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            </label>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 duration-200" type="submit">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
