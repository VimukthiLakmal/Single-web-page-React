import React from "react";
import Child from "../Assets/child.png";

const Work = () => {
  const workInfoData = [
    {
      title: "Professional Curriculum Helps Parents Rest Easy",
      text: "Systematic curriculum for kids ages 3-8, Interactive AI content fosters and maintains kids' interest in learning, Immersive classes with interactive learning experiences",

    },
    {
      title: "Personal Mentoring Service",
      text: "Your Mentor provides 1-on-1 mentoring at any time , Daily reports keep you up to date on your child's learning, Instant feedback keeps kids encouraged and motivated",
    },
    {
      title: "A Math Learning App Kids Crave",
      text: "Developed by early education specialists from Ivy League and other top universities, Progressive learning pathways thoughtfully developed for each child",
    },
    {
      image: Child,
    },

  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h5 className="primary-heading">Adaptive learning path + best teachers = Math mastery</h5>
        <p className="primary-text">
        The guaranteed formula to be a Math wizard
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
