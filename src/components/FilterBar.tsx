interface Props {
  filter: "all" | "completed" | "incomplete";
  setFilter: (f: "all" | "completed" | "incomplete") => void;
}

const FilterBar = ({ filter, setFilter }: Props) => {
  return (
    <div className="flex justify-end">
      <div className="rounded border mb-4">
        {["all", "completed", "incomplete"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`py-1 w-24 text-sm border border-gray-300 ${
              filter === f ? "bg-gray-500 text-white" : "bg-white"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
