// links
import Link from "next/link";

// icons
import {
  RiLinkedinBoxFill,
  //RiLinkedinBoxLine,
  //RiLinkedinFill,
  RiGithubFill,
  //RiGithubLine,
  RiSendPlaneFill,
  //RiSendPlaneLine,
  RiMailCheckFill,
  //RiMailCheckLine
 
} from 'react-icons/ri';


const Socials = () => {
  return(   
  <div className="flex items-center gap-x-5 text-2xl">
    <Link  href={''} className="hover:text-accent transition-all duration-300" >
      <RiLinkedinBoxFill />
    </Link>     
    <Link  href={''} className="hover:text-accent transition-all duration-300" >
      <RiGithubFill />
    </Link>   
    <Link  href={''} className="hover:text-accent transition-all duration-300" >
      <RiSendPlaneFill />
    </Link>   
    <Link  href={''} className="hover:text-accent transition-all duration-300" >
      <RiMailCheckFill />
    </Link>  
  </div>
  );
};

export default Socials;
