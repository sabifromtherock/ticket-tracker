type SelectProps = {
  roles: string[];
  setSelectedRole: (role: string) => void;
};

const Select = ({ roles, setSelectedRole }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="select-container">
      <label className="select-container__label" htmlFor="select-role">
        Choose a role:
      </label>
      <select
        className="select-container__select"
        id="select-role"
        value=""
        onChange={handleChange}
      >
        <option className="select-container__option" value="" disabled>
          Select an option
        </option>
        {roles.map((role, index) => {
          return (
            <option
              className="select-container__option"
              value={role}
              key={index}
            >
              {role}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
