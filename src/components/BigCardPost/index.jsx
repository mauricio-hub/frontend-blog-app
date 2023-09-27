import React from "react";

export const BigCardPost = ({ title, description, date, imageUrl }) => {
  return (
    <div className="contentbigCard">
      <img src={imageUrl} alt={title} className="cardImage" />

      <div className="cardInfo">
        <div>
          <p className="datePost">{date}</p>
        </div>
        <div>
          <h2 className="titlePost">{title}</h2>
          <p className="postDescription">{description}</p>
        </div>

        <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Default
        </span>
        <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Dark
        </span>
        <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Red
        </span>
        <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Green
        </span>
        {/*   <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Yellow
        </span>
        <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          Indigo
        </span>
        <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          Purple
        </span>
        <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
          Pink
        </span> */}
      </div>
    </div>
  );
};
