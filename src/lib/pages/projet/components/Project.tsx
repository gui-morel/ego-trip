import { FrownIcon } from 'lucide-react';

const Project = () => {
  return (
    <div className="grid justify-center gap-2.5">
      <h1 className="bg-gradient-to-br from-gray-500 to-teal-700 bg-clip-text text-2xl md:text-3xl font-bold text-transparent">
        Guillaume Morel
      </h1>
      <div className="grid grid-cols-1 justify-items-center gap-2.5 mt-3">
        <FrownIcon className="hover:animate-bounce" />
        <p>Mince, il n&apos;y a rien pour le moment.</p>
      </div>
    </div>
  );
};

export default Project;
