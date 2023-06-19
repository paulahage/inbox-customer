import { Typography, Modal, Box, IconButton, Stack } from "@mui/material";
import { Ticket } from "../../apiModels";
import { useAppDispatch } from "../../redux/hooks";
import "./ModalConfirmation.scss";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { assignTicket, resolvedTicket } from "../../services/ApiServices";

interface Props {
  ticket: Ticket;
  openModal: any;
  handleCloseModal: any;
  typeButton: string;
}

export default function ModalConfirmation({
  ticket,
  openModal,
  handleCloseModal,
  typeButton,
}: Props) {

  const handleAssignTicket = () => {
    assignTicket(ticket.id);
    handleCloseModal();
  };

  const handleResolvedTicket = () => {
    resolvedTicket(ticket.id);
    handleCloseModal();
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box className="modal__msg-container">
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          noWrap
          marginTop={1}
          fontSize={15}
        >
          {typeButton === "assign"
            ? "Are you sure to assign this ticket to yourself?"
            : "Are your sure to close this ticket and mark it as resolved?"}
        </Typography>
        {typeButton === "assign" ? (
          <Stack direction="row" alignItems="center" spacing={4}>
            <IconButton onClick={handleAssignTicket}>
              <div className="confirm-btn">
                <AssignmentIndIcon fontSize="inherit" />
              </div>
            </IconButton>
            <IconButton onClick={handleCloseModal}>
              <div className="cancel-btn">
                <HighlightOffIcon fontSize="inherit" />
              </div>
            </IconButton>
          </Stack>
        ) : (
          <Stack direction="row" alignItems="center" spacing={4}>
            <IconButton onClick={handleResolvedTicket}>
              <div className="confirm-btn">
                <CheckCircleOutlineIcon fontSize="inherit" />
              </div>
            </IconButton>
            <IconButton onClick={handleCloseModal}>
              <div className="cancel-btn">
                <HighlightOffIcon fontSize="inherit" />
              </div>
            </IconButton>
          </Stack>
        )}
      </Box>
    </Modal>
  );
}
