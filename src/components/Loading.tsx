import { Spinner } from "react-bootstrap";
function Loading() {
  return (
    <Spinner animation="border" variant="light" className="spin"  role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;