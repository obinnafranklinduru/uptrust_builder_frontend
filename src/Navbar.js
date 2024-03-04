import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="list">
        <ul>
          <span>
            <li>
              <h1>Uptrust</h1>
            </li>
          </span>
          <section>
            <li>Resources</li>
          </section>
          <section>
            <li>About Us</li>
          </section>
          <section>
            <li>FAQ</li>
          </section>
          <li>
            <Link to="/SignUp">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px blue",
                  boxShadow: "0px 0px 8px blue",
                }}
              >
                Sign Up
              </motion.button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
