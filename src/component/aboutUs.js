import Image from "next/image";

export default function AboutUs() {
  const aboutUS = [
    {
      id: 1,
      title: "Welcome to",
      header: "Hamro Constuctions",
      description1:
        " At Hamro Constuctions, we bring new life to your spaces with expert craftsmanship and innovative solutions. Whether you're looking to renovate your home, office, or commercial space, our skilled team is dedicated to delivering high-quality results tailored to your needs. ",
      description2:
        "From concept to completion, we focus on precision, durability, and aesthetic appeal. Our services include interior and exterior renovations, flooring, painting, plumbing, electrical work, and custom remodeling.Let us transform your vision into reality with professional renovations that enhance comfort, style, and value. Contact us today to discuss your project and get a free consultation!",
      img: "/aboutUs.png",
    },
  ];

  return (
    <div className="aboutUs" id="aboutUs">
      {aboutUS.map((item) => (
        <div key={item.id} className="aboutUs-content">
          <div className="aboutUs-image">
            <Image
              src={item.img}
              width={650}
              height={400}
              alt="about us"
              layout="intrinsic"
            />
          </div>
          <div className="aboutUs-row">
            <div className="aboutUs-title">
              <h2>{item.title}</h2>
              <h1>{item.header.toUpperCase()}</h1>
            </div>
            <div className="description">
              <p>{item.description1}</p>
              <p>{item.description2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
