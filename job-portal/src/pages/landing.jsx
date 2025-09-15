import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";



const LandingPage = () => {
  return (
    <>
    <nav className="py-4 flex justify-between items-center gradient">
      <Link>
      <img src="/logo (2).png" className="h-20"/>
      </Link>

      <Button variant="outline">Login</Button>


    </nav>
    
    </>
    
  );
};

export default LandingPage;