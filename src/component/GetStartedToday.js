export default function GetStartedToday() {
  const getStartedToday = {
    title: "Get Started Today",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.",
    button: "Get Quote",
  };
  return (
    <div className="getStartedToday">
      <h1>{getStartedToday.title}</h1>
      <p>{getStartedToday.subtitle}</p>
      <button>{getStartedToday.button}</button>
    </div>
  );
}
