import { useState } from 'react';
import { Link } from 'react-router-dom';

const Presentation = () => {
  const [visible, visibility] = useState(false);

  const toggleVisibility = () => {
    visibility(!visible);
  };

  return (
    <div className="grid gap-2.5">
      <h1 className="bg-gradient-to-br from-gray-500 to-teal-700 bg-clip-text text-2xl md:text-3xl font-bold text-transparent">
        Guillaume Morel
      </h1>
      <p className="text-xs md:text-sm text-gray-500">
        Développeur{' '}
        <span
          role="button"
          className={`underline decoration-dashed decoration-sky-500 cursor-pointer select-none hover:animate-none ${
            visible ? '' : 'animate-pulse'
          }`}
          onClick={() => toggleVisibility()}
          onKeyDown={() => toggleVisibility()}
          tabIndex={0}
        >
          Full Stack
        </span>
      </p>

      <div
        className={`grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-2 transition-opacity m-3 ${
          visible ? 'opacity-100' : 'opacity-0 invisible'
        }`}
      >
        <span>Java</span>
        <span>Angular</span>
        <span>Kotlin</span>
        <span>React</span>
        <p className="text-xs md:text-sm text-gray-500 col-span-2">
          <Link to="/project" className="cursor-pointer select-none">
            En voir plus ...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Presentation;
