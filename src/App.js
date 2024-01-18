import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MinusComponent onMinus={setCount} />
      <Count num={count} />
      <AddComponent onAdd={setCount} />
    </div>
  );
}

function MinusComponent({ onMinus }) {
  return <button onClick={(e) => onMinus((current) => current - 1)}>-</button>;
}

function AddComponent({ onAdd }) {
  return <button onClick={(e) => onAdd((current) => current + 1)}>+</button>;
}

function Count({ num }) {
  return <span>{num}</span>;
}
