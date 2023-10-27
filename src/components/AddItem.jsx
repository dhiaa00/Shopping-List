import { FaPlus } from "react-icons/fa";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="add"
        autoFocus
        required
        placeholder="Add a new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
