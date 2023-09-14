import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions/userActions";

const DeleteModal = ({ handleClose, handleOpen, open, deleteId }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(`/userData/deleteUser/${id}`, id));
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Confirm Delete ?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete a user Record, This action is
          irreversible. Click "Cancle" to go back and "Delete" to Delete
          Userdata
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 1,
            gap: 1,
            fontWeight: "bold",
          }}
        >
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(deleteId)}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
