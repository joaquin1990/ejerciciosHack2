import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FilmModal(props) {
  const { show, handleClose, movie } = props;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{movie.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilmModal;
