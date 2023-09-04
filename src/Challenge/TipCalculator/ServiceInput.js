export default function ServiceInput({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was good (5%)</option>
        <option value="10">It was a nice meal (10%)</option>
        <option value="20">That was awesome (20%)</option>
      </select>
    </div>
  );
}
