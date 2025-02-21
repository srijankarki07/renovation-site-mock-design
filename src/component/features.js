import { GrSend } from "react-icons/gr";
import { FaPaintBrush } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { GrVirtualMachine } from "react-icons/gr";

export default function Features() {
  const features = {
    title: "Why Choose Us",
    subtitle:
      "At Hamro Constuctions, we are committed to delivering top-notch renovation and construction services. Our expertise, attention to detail, and customer-centric approach set us apart. Here’s what makes us the best choice for your project.",

    features: [
      {
        id: 1,
        name: "Expert Engineering",
        icon: <GrSend />,
        description:
          "Our skilled engineers bring precision and expertise to every project, ensuring structural integrity and innovative solutions.",
      },
      {
        id: 2,
        name: "High-Quality Work",
        icon: <FaPaintBrush />,
        description:
          "We prioritize quality craftsmanship, using premium materials and techniques to achieve outstanding results.",
      },
      {
        id: 3,
        name: "Best Industry Standards",
        icon: <AiOutlineStock />,
        description:
          "Our work meets and exceeds industry standards, ensuring long-lasting durability and superior finishes.",
      },
      {
        id: 4,
        name: "Experienced Team",
        icon: <RiTeamLine />,
        description:
          "With years of experience, our professionals bring knowledge, skill, and dedication to every renovation and construction project.",
      },
      {
        id: 5,
        name: "Safety First",
        icon: <MdHealthAndSafety />,
        description:
          "We prioritize safety at every stage of construction, following strict guidelines to protect our team and your property.",
      },
      {
        id: 6,
        name: "Modern & Efficient Systems",
        icon: <GrVirtualMachine />,
        description:
          "We leverage the latest technology and modern construction techniques to enhance efficiency and project outcomes.",
      },
    ],
  };

  return (
    <div className="features" id="features">
      <div className="feature-title">
        <h1>{features.title}</h1>
        <p>{features.subtitle}</p>
      </div>

      <div className="feature-container">
        {features.features.map((item) => (
          <div key={item.id} className="feature-item">
            <div className="feature-icon">{item.icon}</div>
            <div className="feature-name">{item.name}</div>
            <div className="feature-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
