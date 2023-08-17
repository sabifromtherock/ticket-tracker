import "./Filter.scss";

type FilterProps = {
  setName: (name: string) => void;
};

const Filter = ({ setName }: FilterProps) => {
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value.toLowerCase());
  };

  return (
    <form className="filter-form">
      <label htmlFor="filter" className="filter-form__label">
        Filter by Name
      </label>
      <input
        type="text"
        id="filter"
        className="filter-form__input"
        onInput={handleFilter}
      />
    </form>
  );
};

export default Filter;
