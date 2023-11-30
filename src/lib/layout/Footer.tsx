import SocialNetworkSection from '@/lib/components/ui/SocialNetworkSection';

const Footer = () => {
  return (
    <footer className="wrapper">
      <SocialNetworkSection />
      <div className="flex mt-5">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://guillaume-morel.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            guillaume-morel.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
