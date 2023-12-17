import { ArrowLeft, ArrowRight } from "lucide-react";



const Project = () => {
  return (
    <ul className="flex flex-col space-y-1">
      <li className="flex flex-row justify-between">
        <ArrowRight className="animate-pulse" />
        <a href="/home-loan" target="_blank" rel="noopener" className="hover:underline">
          Petite calculatrice de prêt immobilier et portefeuille
        </a>
        <ArrowLeft className="animate-pulse" />
      </li>
      <li className="flex flex-row justify-between">
        <ArrowRight className="animate-pulse" />
        <a href="https://github.com/gui-morel/adventofcode-2023" target="_blank" rel="noopener" className="hover:underline">
          Advent of code 2023 en Kotlin [En cours]
        </a>
        <ArrowLeft className="animate-pulse" />
      </li>
    </ul>
  );
};

export default Project;
