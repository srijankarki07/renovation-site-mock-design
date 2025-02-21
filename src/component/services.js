import Image from "next/image";

export default function Services() {
  const services = {
    title: "Our Renovation & Construction Services",
    subtitle:
      "At Hamro Constuctions, we specialize in high-quality renovation and construction services designed to transform your space. Whether you're looking for a complete home makeover or a specific upgrade, our expert team ensures precision, durability, and modern design solutions.",
    services: [
      {
        id: 1,
        name: "Home Renovation",
        image: "/s1.jpg",
        description:
          "Revitalize your home with our expert renovation services. From minor upgrades to full-scale transformations, we enhance functionality, aesthetics, and value.",
      },
      {
        id: 2,
        name: "Home Remodeling",
        image: "/s2.jpg",
        description:
          "Upgrade your living space with customized remodeling solutions. We focus on modern designs, improved layouts, and enhanced comfort tailored to your lifestyle.",
      },
      {
        id: 3,
        name: "Interior & Exterior Renovation",
        image: "/s3.jpg",
        description:
          "Give your home a fresh, modern look both inside and out. Our team ensures top-quality finishes and attention to detail for a seamless transformation.",
      },
      {
        id: 4,
        name: "Structural Reconstruction",
        image: "/s4.jpg",
        description:
          "Rebuild and strengthen your property with our structural reconstruction services. We ensure safety, durability, and compliance with modern building standards.",
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
