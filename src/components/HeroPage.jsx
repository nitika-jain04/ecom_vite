// import Link from "react-router-dom";

import { Link } from "react-router-dom";

function HeroPage() {
  const categories = [
    {
      cateName: "Household & Kitchen",
      img: "../../hero/household.gif",
      id: "household",
    },
    {
      cateName: "Rakhi",
      img: "../../hero/rakhi.gif",
      id: "rakhi",
    },
    {
      cateName: "Pooja Essentials",
      img: "../../hero/pooja.gif",
      id: "pooja",
    },
    {
      cateName: "Kids Gift Items",
      img: "../../hero/kids.gif",
      id: "kids",
    },
    {
      cateName: "Kids Accessories",
      img: "../../hero/accessories.gif",
      id: "accessories",
    },
    {
      cateName: "Personalised",
      img: "../../hero/perso.gif",
      id: "personalised",
    },
    {
      cateName: "Hariyali Teej",
      img: "../../hero/hariyali.gif",
      id: "hariyali",
    },
    {
      cateName: "Tricolor",
      img: "../../hero/tricolor.gif",
      id: "tricolor",
    },
    {
      cateName: "Bangles",
      img: "../../hero/bangles.gif",
      id: "bangles",
    },
    {
      cateName: "Party Decorations",
      img: "../../hero/dec.gif",
      id: "decorations",
    },
  ];

  // const handleClick = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.style.paddingTop = "70px";
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="px-5 lg:px-10">
      <p className="text-center text-2xl blinker-semibold py-5 lg:text-start">
        VIEW BY CATEGORY
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 items-center gap-3 lg:flex lg:flex-wrap">
        {categories.map((category, index) => {
          return (
            <Link to={`/categories/${category.id}`} key={index}>
              <div className="flex flex-col items-center object-cover cursor-pointer h-44">
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
