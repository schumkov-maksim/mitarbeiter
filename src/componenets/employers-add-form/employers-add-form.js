import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      salary: " ",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length > 3 && this.state.salary > 99) {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: "",
        salary: "",
      });
    } else {
      alert("Fehler");
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Fügen Sie neue Mitarbeiter</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Wie ist die Name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Lohn?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Hinzufügen
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
