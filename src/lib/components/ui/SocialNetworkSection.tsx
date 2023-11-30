import { Github, Linkedin } from 'lucide-react';
import type React from 'react';

const socialNetworks = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/gmorelfr/',
    logo: <Linkedin />,
  },
  {
    name: 'Github',
    link: 'https://github.com/gui-morel',
    logo: <Github />,
  },
];

const Logo = ({ logo }: { logo: React.JSX.Element }) => logo;

const SocialNetworkSection = () => {
  return (
    <div className="flex flex-row justify-center gap-10">
      {socialNetworks.map((socialNetwork) => (
        <a
          href={socialNetwork.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Logo logo={socialNetwork.logo} key={socialNetwork.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialNetworkSection;
