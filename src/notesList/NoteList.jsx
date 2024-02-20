export default function NoteList({ todos }) {
  return (
    <div style={{ display: "flex", padding: "10px 0px", gap: "8px" }}>
      {todos?.map((note) => {
        return (
          <div
            key={note.id}
            style={{ border: "2px solid white", padding: "12px" }}
          >
            {note.task}
          </div>
        );
      })}
    </div>
  );
}
