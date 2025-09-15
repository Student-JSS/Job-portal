import {Link} from "react-router-dom";
import {Button} from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <>
      <nav className="py-4 px-8 flex justify-between items-center">
        <Link to="/">
          <img src="/logo (2).png" className="h-20" alt="Hirrd Logo" />
        </Link>
        <Button variant ="outline">Login</Button>

        {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
