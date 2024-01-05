import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Colorchange from "./Colorchange";
import EditNote from "./EditNote";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Note = ({ text, title, deleteNote, id, editNote }) => {
  const [minhaCor, setMinhaCor] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : "",
    transition: transition || "",
  };

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleColorChange = (color) => {
    console.log("Funcao mudar a cor");
    setMinhaCor(color);
  };

  const appStyle = {
    backgroundColor: minhaCor,
  };

  return (
    <div
      className="flex flex-col items-end m-3 rounded-md xl:shadow-2xl "
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div className="flex bg-slate-400 w-64 rounded-t-md justify-end p-1 ">
        <div className="w-52" {...listeners}>
          <h1 className="text-sm font-bold text-white pl-3">{title}</h1>
        </div>
        <button>
          <Colorchange handleColorChange={handleColorChange} />
        </button>
        <button className="mr-4">
          <EditNote
            open={openDialog}
            handleDialog={handleDialog}
            text={text}
            editNote={editNote}
            id={id}
          />
        </button>
        <button
          onClick={() => {
            console.log("Botão clicado!");
            deleteNote(id);
          }}
        >
          <ClearIcon sx={{ color: "red" }} />
        </button>
      </div>
      <div {...listeners}>
        <div
          style={appStyle}
          className="w-64 h-72 min-w-6 bg-amber-300 text-white flex p-5 text-lg rounded-b-md"
        >
          <div>
            <div></div>
            <div>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
