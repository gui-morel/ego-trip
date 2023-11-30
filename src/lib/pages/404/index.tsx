import { Link } from 'react-router-dom';

import { Button } from '@/lib/components/ui/button';

const Page404 = () => {
  return (
    <div className="grid md:flex md:min-h-[60vh] md:items-center gap-4">
      <div className="text-center">
        <img
          width={400}
          src="/assets/404%20Error%20with%20a%20cute%20animal-rafiki.svg"
          alt="404"
        />
        <Button variant="link" asChild>
          <a href="https://storyset.com/web">Image par Storyset</a>
        </Button>
      </div>

      <div className="text-center md:text-start">
        <h1 className="text-3xl">Non pas par là</h1>

        <div className="grid gap-2">
          <p>Pas de soucis !</p>
          <div>
            <Button asChild>
              <Link to="/">Revenir</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
