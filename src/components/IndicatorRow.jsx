import { decodeHTML, statusColor } from "../utils/decodehtml";

function IndicatorRow({ data }) {
  return (
    <tr>
      <td>
        <span className={`badge bg-${statusColor(data?.tableRow.status)}`}>
          {data?.tableRow.status}
        </span>
      </td>
      <td>
        <span>
          {data?.tableRow.parameter
            ? decodeHTML(data?.tableRow.parameter)
            : null}
        </span>
      </td>
      <td>{data?.tableRow.value}</td>
    </tr>
  );
}

export default IndicatorRow;
