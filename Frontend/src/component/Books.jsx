import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books from your server or a static source
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books'); // Replace with your API endpoint
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-gray-100 p-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white shadow-md rounded-md m-4 p-4 max-w-xs">
          <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md" />
          <h3 className="font-bold text-lg mt-4">{book.title}</h3>
          <p className="text-gray-700">{book.author}</p>
          <p className="text-gray-600 mt-2">{book.description}</p>
          <Link to="books" className="mt-4 inline-block">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Home Page
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Books;
