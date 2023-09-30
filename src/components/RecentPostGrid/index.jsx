import React, { useEffect, useState } from "react";
import { BigCardPost } from "../BigCardPost";
import { Card } from "../Card";
import { VeryBigCard } from "../VeryBigCard";
import { usePostData } from "../../context/PostProvider";
import { formatDate } from "../../util";

export const RecentPostGrid = () => {
  const { allPost, loading, error } = usePostData();
  const [showPostActual, setShowPostActual] = useState([]);




  useEffect(() => {
    if (!loading && !error) {
      // Ordenar los post por fecha
      allPost.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // Post actuales
      const postActuales = allPost.slice(0, 4);
      setShowPostActual(postActuales);
    }
  }, [allPost, loading, error]);

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };





  return (
    <div style={{ marginTop: "120px" }}>
    {/* row 1 */}
    <div className="row">
      {/* col1 */}
      <div>
        <div className="bigCard">
          {showPostActual.length > 0 && (
            <BigCardPost
              imageUrl={showPostActual[0].miniature}
              date={formatDate(showPostActual[0].created_at)}
              description={truncateText(showPostActual[0].content, 20)}
              title={showPostActual[0].title}
            />
          )}
        </div>
      </div>
      {/* col2 */}
      <div className="rigth-col">
        <div className="littleCard">
          {showPostActual.length > 1 && (
            <Card
              imageUrl={showPostActual[1].miniature}
              date={formatDate(showPostActual[1].created_at)}
              description={truncateText(showPostActual[1].content, 20)}
              title={showPostActual[1].title}
            />
          )}
        </div>
        <div className="littleCard">
          {showPostActual.length > 2 && (
            <Card
              imageUrl={showPostActual[2].miniature}
              date={formatDate(showPostActual[2].created_at)}
              description={truncateText(showPostActual[2].content,20)}
              title={showPostActual[2].title}
            />
          )}
        </div>
      </div>
    </div>
    {/* row 2 */}
    <div>
      <div className="bigBigCard">
        {showPostActual.length > 3 && (
          <VeryBigCard
            imageUrl={showPostActual[3].miniature}
            date={formatDate(showPostActual[3].created_at)}
            description={truncateText(showPostActual[3].content,20)}
            title={showPostActual[3].title}
          />
        )}
      </div>
    </div>
  </div>
  );
};
