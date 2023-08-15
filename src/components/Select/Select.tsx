type SelectProps = {
  roles: string[];
  setSelectedRole: (role: string) => void;
};

const Select = ({ roles, setSelectedRole }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div>
      <label htmlFor="select-role">Choose a role:</label>
      <select id="select-role" value="" onChange={handleChange}>
        <option value="" disabled>
          Select an option
        </option>
        {roles.map((role, index) => {
          return (
            <option value={role} key={index}>
              {role}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
