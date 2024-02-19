// eslint-disable-next-line react/prop-types
export default function Header({ title }) {
  return (
    <div>
      <h1 title="header">{title}</h1>
      <h2 data-testId="subHeader">secend header</h2>
    </div>
  );
}
