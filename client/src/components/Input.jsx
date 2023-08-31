function Input({ type, label, value, setValue }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-600">{label}</label>
      <input
        type={type}
        className="border rounded px-3 py-2 w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}

export default Input;
