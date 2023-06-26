import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Alle Mitarbeiter" },
    { name: "rise", label: "Nach oben" },
    { name: "moreThen1000", label: "Größe als 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const activ = props.filter === name;
    const clas = activ ? "btn-light" : "btn btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${clas}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
