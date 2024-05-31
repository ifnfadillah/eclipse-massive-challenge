const CardTestimonial = ({ imgUrl, nama, pekerjaan, deksripsi }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 pt-8">
        <img className="w-24 h-24 rounded-full shadow-lg" src={imgUrl} alt={nama} />
        <h5 className=" text-2xl mt-4 font-medium text-sky-700 dark:text-white">{nama}</h5>
        <span className="text-sm mt-2 text-gray-700">{pekerjaan}</span>
        <blockquote className="text-base flex mt-2 mx-10 font-normal text-center text-neutral-800">
          <p>{deksripsi}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default CardTestimonial;
