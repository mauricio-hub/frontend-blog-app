import React, { useEffect, useState } from "react";
import { usePostData } from "../../context/PostProvider";
import { formatDate } from "../../util";

export const SliderPost = () => {
  const { allPost, loading, error } = usePostData();
  const [currentPosts, setCurrentPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    if (!loading && !error) {
      // Ordenar los post por fecha
      const sortedPosts = allPost.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // Calcula el índice inicial y final de los artículos a mostrar en la página actual
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
      // Actualiza el estado con los artículos actuales
      setCurrentPost(currentPosts);
    }
  }, [allPost, loading, error, currentPage]);

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPost.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ marginTop: "80px" }}>
      <h2>All blog posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" style={{ marginTop: "20px" }}>
        {currentPosts.map((post, index) => (
          <div key={index} className="post-item">
            <img
              src={post.miniature}
              alt={post.title}
              className="mx-auto object-cover w-full h-48" // Establece un alto fijo aquí
            />
            <p>{formatDate(post.created_at)}</p>
            <h2 className="text-lg mt-2">{post.title}</h2>
            <p>{truncateText(post.content, 20)}</p>
            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Red
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Green
            </span>
          </div>
        ))}
      </div>

      <ul className="pagination mt-4 flex justify-center space-x-4">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? 'bg-purple-100' : ''}`}
            style={{ width: "40px", height: "40px", textAlign: "center", lineHeight: "40px",
            borderRadius: "10%"
          }}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="#"
              className={`page-link ${number === currentPage ? "active text-black text-center" : "text-center"}`}
              style={{ width: "40px", height: "40px", lineHeight: "40px" }}
            >
              <p>{number}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
