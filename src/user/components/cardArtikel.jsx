import React from "react";
import "./CardHover.css";

function CardArtikel({ imageSrc, title, description, date }) {
  return (
    <div className="card-container w-full sm:w-[390px] h-auto sm:h-[320px] rounded-lg shadow-2xl flex flex-col justify-center items-center mx-auto">
      <div className="w-full h-[178px] sm:h-[178px] rounded-t-lg overflow-hidden flex justify-center items-center">
        <img
          className="card-image w-full h-full object-cover transition-transform duration-500 ease-in-out"
          src={imageSrc}
          alt="Card image"
        />
      </div>
      <div className="self-stretch grow shrink basis-0 px-4 sm:px-[15px] py-3 sm:py-2.5 bg-white rounded-b-lg flex flex-col justify-between items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
          <h6
            className="card-title w-full text-sky-700 text-base font-bold font-primary transition-colors duration-300 ease-in-out"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.5em",
              maxHeight: "3em",
            }}
          >
            {title}
          </h6>
          <div
            className="self-stretch text-zinc-700 text-sm sm:text-sm font-normal font-primary"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.5em",
              maxHeight: "3em",
            }}
          >
            {description}
          </div>
        </div>
        <div className="self-stretch h-[21px] text-right text-neutral-400 text-sm font-normal font-primary">
          {date}
        </div>
      </div>
    </div>
  );
}

export default CardArtikel;
