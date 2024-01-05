import React, { useState } from "react";
import Note from "../components/Note";
import Newnote from "../components/Newnote";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

const Home = () => {
  const [notes, setNotes] = useState([]); //armazena as notas dentro de um array

  const handlerNote = (note) => {
    console.log(note);
    setNotes([...notes, note]); //usa o set notas para adicionar um novo elemento no array notes
  };

  const deleteNote = (id) => {
    //funcao para deletar notas
    console.log("Funcao deletar");
    var filtered = notes.filter((note) => note.id !== id); //filtras o array -- se o elemento tiver uma id diferente da id passada como parametro
    setNotes(filtered); //atualiza o array Usando o setNotes
  };

  const editNote = (id, newText) => {
    //funcao para editar notas -- afuncao pega como parametros o id e o novo texto
    console.log("Funcao editar");
    var notesArray = notes.map(
      (
        note //percore o array notas com o mapa
      ) => (note.id === id ? { ...note, text: newText } : note) //se o id do elemento for igual ao id passado -- percorre o elemento e troca o texto
    );
    setNotes(notesArray); //atualiza o array usando setNotas
  };

  function handleDragEnd(event) {
    //funcao responsavel pelo drag
    const { active, over } = event;
    setNotes((notes) => {
      const activeIndex = notes.findIndex((note) => note.id === active.id);
      const overIndex = notes.findIndex((note) => note.id === over.id);

      return arrayMove(notes, activeIndex, overIndex);
    });
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="p-8">
        <Newnote handlerNote={handlerNote} />
        <SortableContext strategy={rectSortingStrategy} items={notes}>
          <div className="flex flex-wrap mt-5">
            {notes.map((note) => (
              <Note
                note={note}
                key={note.id}
                text={note.text}
                title={note.title}
                id={note.id}
                deleteNote={deleteNote}
                editNote={editNote}
              />
            ))}
          </div>
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default Home;
