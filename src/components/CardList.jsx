import Card from "./Card";

function CardList({ features }) {
  return (
    <section
      className="*:nth-1:border-cyan *:nth-2:border-red *:nth-3:border-orange *:nth-4:border-blue
      last:mb-12 grid gap-8 
      sm:grid-cols-4 sm:*:col-span-2 sm:*:first:col-start-2 sm:*:last:col-start-2
      md:grid-cols-3 md:*:col-span-1 md:*:first:col-span-1 md:*:first:col-start-1 md:*:last:col-span-1 md:*:last:col-start-3 
      md:grid-flow-col md:grid-rows-4 md:*:row-span-2 md:*:first:row-start-2 md:*:last:row-start-2"
    >
      {features.map((feature) => (
        <Card feature={feature} key={feature.title}></Card>
      ))}
    </section>
  );
}

export default CardList;
