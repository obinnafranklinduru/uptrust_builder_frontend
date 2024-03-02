import { motion } from "framer-motion";
import duru from "./image/FB_IMG_1706401480348.jpg";
import myles from "./image/WhatsApp Image 2024-02-26 at 21.33.25_46741bc0.jpg";
import van from "./image/WhatsApp Image 2024-02-26 at 21.30.46_917ee226.jpg";
import pat from "./image/IMG_E3124.JPG";

const MeetOurTeam = () => {
  const title = "Meet Our Team";
  const name = "Passionate Experts Committed to Your Career Success.";
  return (
    <div className="meetourteam">
      <div className="section">
        <h3>{title}</h3>
        <h2>{name}</h2>
      </div>
      <div className="img">
        <img src={duru} alt="Duru" />
        {/* <p>Backend Engineer</p>
          <strong>Obinna Duru</strong> */}
        <img src={myles} alt="Myles" />
        {/* <p>Backend Engineer</p>
          <strong>Cyril Emmanuel</strong> */}
        <img src={van} alt="Van" />
        {/* <p>AI/ML Engineer </p>
          <strong>Vanessa Ndikom</strong> */}
        <img src={pat} alt="Pat" />
        {/* <p>FrontEnd Engineer</p>
          <strong>Patrick Iyiakimo</strong> */}
      </div>
      <div className="newsletter">
        <h2>Sign up to our newsletter</h2>
        <p>
          Sign up for our newsletter and be the first to receive exclusive
          career insights.
        </p>
        <input type="text" name="text" placeholder="Enter your Email" />
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px blue",
            boxShadow: "0px 0px 8px blue",
          }}
        >
          Subscribe
        </motion.button>
      </div>
    </div>
  );
};

export default MeetOurTeam;
