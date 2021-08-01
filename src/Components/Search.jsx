import React,{useState} from "react";

const Search = ({setSearchQuery}) => {

    const [text,setText]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(text)
        console.log(text)
    }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)} className="flex justify-center ">
        <input
          type="text"
          placeholder="search and press Enter ..."
          className="border-none outline-none bg-gray-800 rounded-md text-white font-semibold px-4 py-1 w-72 bg-transparent border-b-2 mb-4"
          onChange={e => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
