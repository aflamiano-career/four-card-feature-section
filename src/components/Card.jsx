function Card({ feature }) {
  return (
    <div className="max-w-[19.625rem] min-h-[15.625rem] p-8 shadow-2xl rounded-lg border-t-4 grid grid-rows-2 justify-items-end items-center">
      <hgroup>
        <h2 className="font-semibold text-xl leading-[135%] text-grey500 mb-1.5">
          {feature.title}
        </h2>
        <p className="text-[0.8rem] leading-[160%] tracking-[.006rem] text-grey400">
          {feature.description}
        </p>
      </hgroup>
      <img src={feature.image} alt={feature.altText} />
    </div>
  );
}

export default Card;
