import Image from "next/image";

export default function Services() {
  const services = {
    title: "Our Construction Services",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.",
    services: [
      {
        id: 1,
        name: "House Renovation",
        image: "/s1.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
      {
        id: 2,
        name: "House Remodeling",
        image: "/s2.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
      {
        id: 3,
        name: "House Renovation",
        image: "/s3.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
      {
        id: 4,
        name: "House Reconstruction",
        image: "/s4.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.",
      },
    ],
  };

  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>{services.title}</h1>
        <p>{services.subtitle}</p>
      </div>
      <div className="services-details">
        {services.services.map((item) => (
          <div key={item.id} className="service-item">
            <Image
              src={item.image}
              alt={item.name}
              width={350}
              height={200}
              layout="intrinsic"
              className="service-image"
            />
            <div className="details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
