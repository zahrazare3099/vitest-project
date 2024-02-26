import useCounter from "../hooks/useCounter";

// eslint-disable-next-line react/prop-types
export default function Header({ title, count, decrement, increment }) {
  return (
    <div>
      <h1 title="header">{title}</h1>
      <h2 data-testId="subHeader">secend header</h2>
      <div style={{ display: "flex", gap: "8px", padding: "1rem 0" }}>
        <button onClick={increment}>inc</button>
        <input type="text" value={count} />
        <button onClick={decrement}>dec</button>
      </div>
    </div>
  );
}
