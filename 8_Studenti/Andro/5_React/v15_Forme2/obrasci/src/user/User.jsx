export default function User({ ime, godine, onNameChange, onDeleteUser }) {
  return (
    <>
      <p onClick={onDeleteUser}>
        Pozdrav, moje ime je {ime} i imam {godine} godina
      </p>
      <input type="text" value={ime} onChange={onNameChange} />
    </>
  );
}
