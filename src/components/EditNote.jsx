import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";

export default function EditNote({ open, handleDialog, text, editNote, id }) {
  const [editedText, setEditedText] = React.useState(text);
  const textHandler = () => {
    editNote(id, editedText);
    handleDialog();
    text = "";
  };

  return (
    <>
      <button onClick={handleDialog} className="w-2">
        <EditIcon
          sx={{
            color: "dodgerblue",
            padding: "1px",
          }}
        />
      </button>
      <Dialog open={open} keepMounted>
        <DialogTitle>Editar nota</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              defaultValue={text}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog}>Cancelar</Button>
          <Button onClick={textHandler}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
