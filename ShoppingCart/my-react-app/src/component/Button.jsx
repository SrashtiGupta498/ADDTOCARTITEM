export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 text-sm font-medium"
    >
      {children}
    </button>
  );
};
