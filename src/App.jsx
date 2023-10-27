import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Methods from "./components/Methods";
import AddItem from "./components/AddItem";

function App() {
  const [methods, setMethods] = useState(
    localStorage.getItem("methods")
      ? JSON.parse(localStorage.getItem("methods"))
      : [
          {
            id: 1,
            name: "Eggs",
            checked: false,
          },
          {
            id: 2,
            name: "Bread",
            checked: false,
          },
          {
            id: 3,
            name: "Kouskous",
            checked: false,
          },
          {
            id: 4,
            name: "Hoodie",
            checked: false,
          },
          {
            id: 5,
            name: "USB-c cable",
            checked: false,
          },
        ]
  );

  const handleCheck = (id) => {
    setMethods(
      methods.map((m) => {
        m.id === id ? (m.checked = !m.checked) : m.checked;
        return m;
      })
    );
    localStorage.setItem("methods", JSON.stringify(methods));
  };

  const handleRemove = (id) => {
    const mList = methods
      .filter((m) => m.id !== id)
      .map((m, i) => {
        m.id = i + 1;
        return m;
      });
    setMethods(mList);
    localStorage.setItem("methods", JSON.stringify(mList));
  };

  // adding item

  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = methods.length + 1 || 1;
    const myNewItem = {
      id: itemId,
      name: newItem,
      checked: false,
    };
    setMethods([...methods, myNewItem]);
    localStorage.setItem("methods", JSON.stringify([...methods, myNewItem]));
    setNewItem("");
  };

  return (
    <>
      <Header head="Your Shopping List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Methods
        methods={methods}
        setMethods={setMethods}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
      />
      <Footer
        foot={
          methods.length === 1
            ? `${methods.length} Item`
            : `${methods.length} Items`
        }
      />
    </>
  );
}

export default App;
