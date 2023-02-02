import IndicatorRow from "./IndicatorRow";

function Indicator({ indicators }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Estado</th>
          <th scope="col">Parámetro</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        {indicators.map((item) => (
          <IndicatorRow key={item.code} data={item} />
        ))}
      </tbody>
    </table>
  );
}
export default Indicator;
