import Modal from "react-modal";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import "../../styles/modalPageStyle/modalPage.css";
export default function ModalPage({ switchColorsInvert }) {
  const [modalIsOpen, setIsOpen] = useState(true);

  const customStyles = {
    content: {
      top: "2%",
      left: "2%",
      width: "400px",
      height: "270px",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Box sx={{ padding: "20px 0 0 0" }}>
      <Button
        sx={{ color: switchColorsInvert(), borderColor: switchColorsInvert() }}
        variant="outlined"
        onClick={openModal}
      >
        see my greeting again
      </Button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Box className="modalPageBox">
          <Typography className="modalPageText" paragraph="true" align="center">
            Hi, my name is <span className="myName">Pavel Roshupkin </span>
          </Typography>
          <Typography className="modalPageText" paragraph="true" align="center">
            my LinkedIn{" "}
            <a
              className="linkedInLink"
              href="https://www.linkedin.com/in/pavel-roshupkin-035561232/"
            >
              page
            </a>
          </Typography>
          <Typography className="modalPageText" paragraph="true" align="center">
            I am glad to welcome you on my first "testing" page.
          </Typography>
          <Typography className="modalPageText" paragraph="true" align="center">
            Have a good time
          </Typography>
          <Typography className="modalPageText" paragraph="true" align="center">
            <Button
              className="buttonModalPage"
              size="small"
              variant="contained"
              onClick={closeModal}
              color="info"
            >
              Close
            </Button>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
