type FilterProps = {
  setName: (name: string) => void;
};

const Filter = ({ setName }: FilterProps) => {
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value.toLowerCase());
  };

  return (
    <form>
      <label htmlFor="filter">Filter by Name</label>
      <input type="text" id="filter" onInput={handleFilter} />
    </form>
  );
};

export default Filter;
