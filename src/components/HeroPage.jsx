// import Link from "react-router-dom";

import { Link } from "react-router-dom";

function HeroPage() {
  const categories = [
    {
      cateName: "Rakhi",
      img: "../../hero/rakhi-gif.gif",
      id: "rakhi",
    },
    {
      cateName: "Tricolor",
      img: "../../hero/tri-gif.gif",
      id: "tricolor",
    },
    {
      cateName: "Household & Kitchen",
      img: "../../hero/house-gif.gif",
      id: "household",
    },
    {
      cateName: "Kids Accessories",
      img: "../../hero/acc-gif.gif",
      id: "accessories",
    },
    {
      cateName: "Kids Gift Items",
      img: "../../hero/kids-gif.gif",
      id: "kids",
    },
    {
      cateName: "Bangles",
      img: "../../hero/bangles-gif.gif",
      id: "bangles",
    },
    {
      cateName: "Hariyali Teej",
      img: "../../hero/hari-gif.gif",
      id: "hariyali",
    },
    {
      cateName: "Personalised",
      img: "../../hero/perso-gif.gif",
      id: "personalised",
    },
    {
      cateName: "Pooja Essentials",
      img: "../../hero/pooja-gif.gif",
      id: "pooja",
    },
    {
      cateName: "Party Decorations",
      img: "../../hero/dec-gif.gif",
      id: "decorations",
    },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.paddingTop = "70px";
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-5 lg:px-10 py-5">
      <p className="text-center text-2xl blinker-semibold py-5 lg:text-start">
        VIEW BY CATEGORY
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 items-center gap-5 lg:flex lg:flex-wrap">
        {categories.map((category, index) => {
          return (
            <Link to={`/categories/${category.id}`} key={index}>
              <div
                className="flex flex-col items-center object-cover cursor-pointer h-44"
                // onClick={() => handleClick(category.id)}
              >
                <img
                  src={category.img}
                  alt={category.cateName}
                  className="aspect-square rounded-full m-2"
                  width={100}
                  height={100}
                />
                <p className="text-center mt-3 font-serif font-bold blinker-semibold blinker-bold max-h-28">
                  {category.cateName}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HeroPage;
