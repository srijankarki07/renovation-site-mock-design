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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.",

    features: [
      {
        id: 1,
        name: "Engineering",
        icon: <GrSend />,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
      {
        id: 2,
        name: "Quality Work",
        icon: <FaPaintBrush />,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
      {
        id: 3,
        name: "Best Quality",
        icon: <AiOutlineStock />,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },

      {
        id: 4,
        name: "Experienced Team",
        icon: <RiTeamLine />,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
      {
        id: 5,
        name: "Safety",
        icon: <MdHealthAndSafety />,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
      {
        id: 6,
        name: "Modern System",
        icon: <GrVirtualMachine />,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
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
