const ExpensiveResult = ({ search }) => {
  if (!search) return null;
  return (
    <>
      {Array(100)
        .fill(null)
        .map((_, idx) => (
          <div className="rounded-sm inline-block m-2 bg-gray-200 p-4 w-80 hover:bg-gray-400">
            search `{search}` #{idx}
          </div>
        ))}
      <ExpensiveResult search={search.substring(1)} />
    </>
  );
};

export default ExpensiveResult;
