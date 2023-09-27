import React from "react";

export const Card = ({ date, title, description, imageUrl }) => {
  return (
    <>
      <div className="contentCard">
        <img src={imageUrl} alt={title} className="imageCardRigth" />
        <div>
          <div>
            <p className="datePost">{date}</p>
          </div>
          <div>
            <h2 className="titleCardRigth">{title}</h2>
            <p className="postDescription">{description}</p>
          </div>
          <div className="contentTags">
            <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
              Indigo
            </span>
            <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              Purple
            </span>
            <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              Pink
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
