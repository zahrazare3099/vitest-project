// eslint-disable-next-line react/prop-types
export default function ErrorMassage({ count }) {
  return (
    <div>
      <p>
        {count} {count === 1 ? "Error" : "Errors"} occured.
        <span>test</span>
      </p>
    </div>
  );
}
