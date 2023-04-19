import React from 'react'
import { Typography, Modal, Box, IconButton } from "@mui/material";
import { Ticket } from "../apiModels";
import "./ModalConfirmation.scss";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { reAssignTicket, resolvedTicket } from '../services/ApiServices';

interface Props {
  ticket: Ticket;
  openModal: any;
  handleCloseModal: any;
  typeButton: string;
}

export default function ModalConfirmation({ ticket, openModal, handleCloseModal, typeButton }: Props) {

  const handleReAssignTicket = () => {
    reAssignTicket(ticket.id);
    handleCloseModal();
  }

  const handleResolvedTicket = () => {
    resolvedTicket(ticket.id);
    handleCloseModal();
  }

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
          {typeButton === "reAssign"
            ? "Are you sure to re-assign this ticket to yourself?"
            : "Are your sure to close this ticket and mark it as resolved?"}
        </Typography>
        {typeButton === "reAssign" ? (
          <IconButton onClick={handleReAssignTicket}>
            <div className="confirm-btn">
              <AssignmentIndIcon fontSize="inherit" />
            </div>
          </IconButton>
        ) : (
          <IconButton onClick={handleResolvedTicket}>
            <div className="confirm-btn">
              <CheckCircleOutlineIcon fontSize="inherit" />
            </div>
          </IconButton>
        )}
      </Box>
    </Modal>
  );
}

