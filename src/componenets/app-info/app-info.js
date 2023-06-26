import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1>Mitarbeiter von</h1>
      <h2> Algemein {employees}</h2>
      <h2> Bonus: {increased}</h2>
    </div>
  );
};

export default AppInfo;
