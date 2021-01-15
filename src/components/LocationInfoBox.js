const LocationInfoBox = (props) => {
  const { info } = props;
  return (
    <div className="location-info">
      <h1>Event Location Info</h1>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>

        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
