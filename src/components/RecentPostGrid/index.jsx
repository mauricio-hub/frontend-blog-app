import React from "react";
import { BigCardPost } from "../BigCardPost";
import { Card } from "../Card";

export const RecentPostGrid = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      {/* row 1 */}
      <div className="row">
        {/* col1 */}
        <div>
          <div className="bigCard">
            <BigCardPost
              imageUrl={
                "https://infinigeek.com/assets/which-desk-setup-is-best-for-a-developer.jpg"
              }
              date={"24-09-2023"}
              description={
                "How do you create compelling presentations that wow your colleagues and impress your managers?"
              }
              title={"UX review presentations"}
            />
          </div>
        </div>
        {/* col2 */}
        <div className="rigth-col">
          <div className="littleCard">
            <Card
              imageUrl={
                "https://infinigeek.com/assets/which-desk-setup-is-best-for-a-developer.jpg"
              }
              date={"24-09-2023"}
              description={
                "How do you create compelling presentations that wow your colleagues and impress your managers?"
              }
              title={"UX review presentations"}
            />
          </div>
          <div className="littleCard">
            <Card
              imageUrl={
                "https://infinigeek.com/assets/which-desk-setup-is-best-for-a-developer.jpg"
              }
              date={"24-09-2023"}
              description={
                "How do you create compelling presentations that wow your colleagues and impress your managers?"
              }
              title={"UX review presentations"}
            />
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div>
        <div className="bigBigCard">
          <span>item 4</span>
        </div>
      </div>
    </div>
  );
};
