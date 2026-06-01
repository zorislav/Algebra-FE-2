export default function UserFunction({ ime, godine, onNameChange = () => {} }) {
  return (
    <>
      {" "}
      <p>
        Pozdrav moje ime je {ime} i imam {godine} godina
      </p>
      <input type="text" value={ime} onChange={onNameChange} />
    </>
  );
}
