export default function UserChilder({ ime, godine, children }) {
  return (
    <>
      <p>
        Pozdrav, moje ime je {ime} i imam {godine} godina.
      </p>
      <p>{children}</p>
    </>
  );
}
