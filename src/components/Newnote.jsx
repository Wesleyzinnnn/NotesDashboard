import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ handlerNote }) {
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [id, setId] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const createNote = (text) => {
    if (text === "" || title === "") {
      alert("Digite um valor valido");
    } else {
      const noteObject = {
        id: id,
        text: text,
        title: title,
      };
      setId(id + 1);
      handlerNote(noteObject);
      handleClose();
      setText("");
      setTitle("");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        sx={{
          color: "royalblue",
          backgroundColor: "white",
          fontWeight: "bold",
          marginLeft: "12px",
        }}
      >
        Adicionar nota
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sua nota</DialogTitle>
        <DialogContent>
          <form>
            <p>Título</p>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
            />
          </form>
          <form>
            <p>Conteúdo</p>
            <TextField
              placeholder="Conteúdo"
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button>Cancelar</Button>
          <Button onClick={() => createNote(text)}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
