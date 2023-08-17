// componets
import TesttimonialSlider from "../../components/TestimonialSlider";

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2 variants={fadeIn('up', 0.2)}
        initial="hidden" 
        animate="show"
        exit="hidden"
        className="h2  mg-8 xl:mb-0">
          Los Clientes <span className="text-accent">dicen</span>
        </motion.h2>
        {/* slider */}
        <motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden" 
        animate="show"
        exit="hidden"        
        >          
          <TesttimonialSlider />
        </motion.div>
      </div>
    </div>

    //<div></div>
  );
};

export default Testimonials;
