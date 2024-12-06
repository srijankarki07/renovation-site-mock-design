import Image from "next/image";

export default function AboutUs() {
  const aboutUS = [
    {
      id: 1,
      title: "Welcome to",
      header: "House Renovation Company",
      description1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula malesuada nisi eu rutrum. Maecenas purus diam, lobortis at velit eget, ultricies posuere augue. Nullam nec lectus a augue dictum euismod ut sed ex. Integer pretium arcu neque, vitae mollis massa consequat eu. In eget dolor luctus, varius dui fringilla, lobortis odio. Cras molestie nunc pretium, dictum lorem vel, vulputate mi. Etiam ac ligula bibendum, luctus diam sit amet, rutrum ipsum.",
      description2:
        "Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate fringilla. Sed purus dui, tempus tempor velit vel, feugiat eleifend nulla.",
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
