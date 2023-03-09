import React from "react";
import "./categories.styles.scss";

const App = () => {

  const categories = [
    {
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      title: "Women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
    },
    {
      title: "Men",
      imageUrl: "https://i.tbb.co/GCCdy8t/mens.png",
      id: 5,
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, imageUrl, id }) => (
          <div key={id} className="category-container">
            {/* <img src="" alt="" /> */}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
