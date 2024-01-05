import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { HexColorPicker } from "react-colorful";

export default function Colorchange({ handleColorChange }) {
  const [bgcolor, setBgColor] = React.useState("#ffff79");
  const [open, setOpen] = React.useState(false);

  const handleChange = (color) => {
    setBgColor(color);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleColorChange(bgcolor);
  };

  return (
    <>
      <ColorLensIcon onClick={handleClickOpen} sx={{ color: "white" }} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h1>Escolha a cor da nota</h1>
        </DialogTitle>
        <DialogContent>
          <button>
            <HexColorPicker color={bgcolor} onChange={handleChange} />
          </button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
