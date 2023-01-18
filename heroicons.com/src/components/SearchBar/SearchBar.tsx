type SearchBarProps = {
  filter: string;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
};

export const SearchBar = ({ filter, setFilter, setSearch }: SearchBarProps) => {
  return (
    <div className="sticky top-0 z-50 mx-auto flex flex-col border bg-white px-4 pb-4 shadow sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-0 lg:px-8">
      <div className="flex items-center py-6">
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-full w-5 fill-slate-500"
        >
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
        <input
          type="text"
          className="ml-4 w-full text-slate-500 focus:outline-none"
          placeholder="Search all icons..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 items-center font-semibold leading-6 text-slate-500 sm:flex-row lg:hidden">
        <button onClick={() => setFilter("outline")}>
          {(filter === "outline" && (
            <div className="rounded-l-lg border border-slate-100 bg-slate-50 py-2 px-6 text-center text-violet-500 shadow-sm">
              Outline
            </div>
          )) || (
            <div className="rounded-l-lg border border-slate-100 py-2 px-6 text-center shadow-sm transition hover:bg-slate-50">
              Outline
            </div>
          )}
        </button>
        <button onClick={() => setFilter("solid")}>
          {(filter === "solid" && (
            <div className="border border-slate-100 bg-slate-50 py-2 px-6 text-center text-violet-500 shadow-sm">
              Solid
            </div>
          )) || (
            <div className="border border-slate-100 py-2 px-6 text-center shadow-sm transition hover:bg-slate-50">
              Solid
            </div>
          )}
        </button>
        <button onClick={() => setFilter("mini")}>
          {(filter === "mini" && (
            <div className="rounded-r-lg border border-slate-100 bg-slate-50 py-2 px-6 text-center text-violet-500 shadow-sm">
              Mini
            </div>
          )) || (
            <div className="rounded-r-lg border border-slate-100 py-2 px-6 text-center shadow-sm transition hover:bg-slate-50">
              Mini
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
