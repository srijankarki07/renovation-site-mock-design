export default function GetStartedToday() {
  const getStartedToday = {
    title: "Get Started Today",
    subtitle:
      "Transform your space with expert renovation and construction services from Hamro Constuctions. Whether you're planning a home upgrade or a complete remodel, our team is ready to bring your vision to life. Get a personalized consultation and a free quote today!",
    button: "Get a Free Quote",
  };

  return (
    <div className="getStartedToday">
      <h1>{getStartedToday.title}</h1>
      <p>{getStartedToday.subtitle}</p>
      <button>{getStartedToday.button}</button>
    </div>
  );
}
