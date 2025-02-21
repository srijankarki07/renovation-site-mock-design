import Image from "next/image";

export default function Projects() {
  const projects = {
    title: "Our Featured Projects",
    subtitle:
      "Explore some of our finest construction and renovation projects. Each project showcases our dedication to quality, modern design, and functionality tailored to client needs.",
    projects: [
      {
        id: 1,
        name: "Modern Villa Renovation",
        image: "/p1.jpg",
        description:
          "A complete transformation of a traditional villa into a modern, luxurious space with open layouts, smart lighting, and premium finishes.",
      },
      {
        id: 2,
        name: "Eco-Friendly Home Construction",
        image: "/p2.jpg",
        description:
          "Designed with sustainability in mind, this home features energy-efficient materials, solar panels, and a rainwater harvesting system.",
      },
      {
        id: 3,
        name: "Urban Apartment Makeover",
        image: "/p3.jpg",
        description:
          "A sleek and stylish apartment upgrade, focusing on space optimization, modern interiors, and high-end fixtures.",
      },
      {
        id: 4,
        name: "Commercial Space Redesign",
        image: "/p4.jpeg",
        description:
          "A complete redesign of a commercial workspace to enhance productivity, incorporating ergonomic furniture and smart technology.",
      },
    ],
  };

  return (
    <div className="services" id="projects">
      <div className="services-title">
        <h1>{projects.title}</h1>
        <p>{projects.subtitle}</p>
      </div>
      <div className="services-details">
        {projects.projects.map((project) => (
          <div key={project.id} className="service-item">
            <Image
              src={project.image}
              alt={project.name}
              width={350}
              height={200}
              layout="intrinsic"
              className="service-image"
            />
            <div className="details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
