interface Iprops {
  errore: string;
}
function Errore({ errore }: Iprops) {
  return (
    <>
      <div className="text-red-700 text-md">{errore}</div>
    </>
  );
}
export default Errore;
