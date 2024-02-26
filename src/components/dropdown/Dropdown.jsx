import "./dropdown.css";

const Dropdown = ({ persons, handleOnChange }) => {
  return (
    <div className="dropdown">
      <label htmlFor="person">Välj ett namn: </label>
      <select
        id="person"
        onChange={(e) => {
          e.preventDefault();
          handleOnChange(e.target.value);
        }}
      >
        <option value={"Välj namn"}>--Välj namn--</option>
        {persons.map((person) => (
          <option key={person.firstname} value={person.firstname}>
            {person.firstname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
