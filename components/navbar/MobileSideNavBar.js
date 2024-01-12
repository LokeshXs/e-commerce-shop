
import { motion } from "framer-motion";
import Link from "next/link";


const MobileSideNavBar = ({links,isNavBarOpen,setIsNavBarOpen}) => {
 

  return (
    <>
      <div
        className={`fixed z-30 w-8/12 h-screen top-0 right-0 bg-black transition-all duration-300  ${
          isNavBarOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="mt-24 p-8 max-sm:p-6">
          <motion.ul
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3, // Delay between each li element
                },
              },
            }}
            initial="hidden"
            animate={isNavBarOpen ? "visible" : ""}
            exit="hidden"
          >
            {links.map((item,index) => (
              <motion.li
                key={index}
                className="mt-8"
                onClick={() => {
                  // Your click handler logic here
                }}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Adjust the duration as needed
                }}
              >
                <Link
                  href={item.link}
                  className="font-montserrat leading-normal text-3xl max-sm:text-2xl text-white font-bold "
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-20 backdrop-blur-sm h-screen w-screen ${
          isNavBarOpen ? "block " : "hidden "
        } `}
        onClick={() => {
          setIsNavBarOpen((prev) => !prev);
        }}
      />
    </>
  );
};

export default MobileSideNavBar;
