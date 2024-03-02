import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const KeyFeatures = () => {
  const title = "Key Features";
  const subtitle = "Explore Our Key Features";

  const [details, setDetails] = useState([
    {
      title: "Job Description Analyser",
      body: "Uncover the secrets behind job postings effortlessly. Paste your dream job description, and let Uptrust extract the key skills and requirements, giving you a clear roadmap to success.",
      text: "Job Description Analyser",
      icon: <FiArrowRight size={20} color="white" />,
      id: 1,
    },
    {
      title: "Profile Comparison",
      body: "Discover how you measure up to your dream job. Our profile comparison tool analysis your skills against job requirements and guiding you on the path to becoming the perfect candidate.",
      text: "Profile Comparison",
      icon: <FiArrowRight size={20} color="white" />,
      id: 2,
    },
    {
      title: "Learning Recommender",
      body: "Embark on a personalised learning journey. We recommend courses tailored to your unique skill gaps with seemless integrationwith YouTube, Udemy, and Coursera.",
      text: "Learning Recommender",
      icon: <FiArrowRight size={20} color="white" />,
      id: 3,
    },
    {
      title: "Profile Builder",
      body: "Craft a standout profile that reflects your true potential. Our profile builder captures your background, interests, and goals, shaping a profile that speaks to your strengths.",
      text: "Profile Builder",
      icon: <FiArrowRight size={20} color="white" />,
      id: 4,
    },
  ]);

  return (
    <div className="keyfeatures">
      <h3>{title}</h3>
      <h2>{subtitle}</h2>
      {details.map((detail) => (
        <div className="detailers" key={detail.id}>
          <h1>{detail.title}</h1>
          <section>{detail.body}</section>
          <strong>{detail.icon}</strong>
          <p>{detail.text}</p>
        </div>
      ))}
      
    </div>
  );
};

export default KeyFeatures;
