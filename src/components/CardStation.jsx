import Indicator from "./Indicator";

function CardStation({ data }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex align-items-stretch">
      <div className="card mb-3 w-100 ">
        <h3 className="card-header text-white bg-info">{data.nombre}</h3>
        <div className="card-body">
          <Indicator indicators={data.realtime} />
        </div>
        <div className="card-footer text-muted">
          {data.comuna}, {data.region} ({data.regionindex})
        </div>
      </div>
    </div>
  );
}

export default CardStation;
