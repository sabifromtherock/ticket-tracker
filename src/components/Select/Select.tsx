type SelectProps = {
  roles: string[];
  setSelectedRole: (role: string) => void;
};

const Select = ({ roles, setSelectedRole }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  return (
    <form className="select-form">
      <label className="select-form__label" htmlFor="select-role">
        Choose a role
      </label>
      <select
        className="select-form__select"
        id="select-role"
        value=""
        onChange={handleChange}
      >
        <option className="select-form__option" value="" disabled>
          Select an option
        </option>
        <option className="select-form__option" value="all">
          Select All
        </option>
        {roles.map((role, index) => {
          return (
            <option className="select-form__option" value={role} key={index}>
              {role}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Select;
