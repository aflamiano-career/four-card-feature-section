import CardList from "./components/CardList";
import Header from "./components/Header";

const features = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    image: "icon-supervisor.svg",
    altText: "A magnifiying glass cartoon image",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    image: "icon-team-builder.svg",
    altText: "A browser with a house in front cartoon image",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    image: "icon-karma.svg",
    altText: "A lightbulb cartoon image",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    image: "icon-calculator.svg",
    altText: "A computer cartoon image",
  },
];

function App() {
  return (
    <main className="min-h-screen px-[1.875rem] font-poppins flex flex-col justify-evenly items-center">
      <Header />
      <CardList features={features} />
    </main>
  );
}

export default App;
