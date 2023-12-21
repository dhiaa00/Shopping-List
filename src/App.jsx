import "./App.css";
import { createContext, useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Methods from "./components/Methods";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import FetchData from "./services/apiFetchData";
import CreateFetchObj from "./services/createFetchObj";
import ThemeButton from "./components/ThemeButton";

export const darkMode = createContext();

function App() {
  const apiURL = "http://localhost:3500/items";

  const [methods, setMethods] = useState(() => {
    return localStorage.getItem("methods")
      ? JSON.parse(localStorage.getItem("methods"))
      : [];
  });

  // Checking items

  const handleCheck = async (id) => {
    const newMethods = methods.map((m) => {
      m.id === id ? (m.checked = !m.checked) : m.checked;
      return m;
    });
    const editedItem = newMethods.filter((m) => m.id === id);
    setMethods(newMethods);

    // Edit content in local api

    const result = await FetchData(
      `${apiURL}/${id}`,
      CreateFetchObj("PATCH", { checked: editedItem[0].checked })
    );
    if (result) setFetchError(result);
  };

  // Removing items

  const handleRemove = async (id) => {
    const mList = methods
      .filter((m) => m.id !== id)
      .map((m, i) => {
        m.id = i + 1;
        return m;
      });
    setMethods(mList);

    // Edit the content of local api

    const result = await FetchData(`${apiURL}/${id}`, { method: "DELETE" });
    // mList.map(async (m, i) => {
    //   const result2 = await FetchData(
    //     `${apiURL}/${m.id + 1}`,
    //     CreateFetchObj("PUT", m)
    //   );
    //   if (result2) setFetchError(result);
    // });
    if (result) setFetchError(result);
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
    setFetchError(null);
  };

  // searching items

  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    const exp = e.target.value;
    setSearchItem(exp);
  };

  //Using a local api to fetch data

  const [fetchError, setFetchError] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        if (!localStorage.getItem("methods")) {
          const result = await fetch(apiURL);
          console.log(result);
          if (!result.ok) throw Error("Did not receive expected data");
          const data = await result.json();
          setMethods(data);
          setFetchError(null);
        }
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      handleFetch();
    }, 2000);
  }, []);

  //Using useContext

  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    if (theme === true) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    setTheme(!theme);
  };

  // Main Content

  return (
    <>
      <darkMode.Provider value={theme}>
        <Header head="Your Shopping List" />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Search
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          handleSearch={handleSearch}
        />
        {Loading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <BounceLoader color="lightGreen" />
            <p>Loading</p>
          </div>
        )}
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
        {!fetchError && !Loading && (
          <Methods
            methods={methods.filter((m) => {
              const regEx = new RegExp(`${searchItem}`, "i");
              return regEx.test(m.name);
            })}
            setMethods={setMethods}
            handleCheck={handleCheck}
            handleRemove={handleRemove}
          />
        )}
        <ThemeButton handleTheme={handleTheme} />
        <Footer
          foot={
            methods.length === 1
              ? `${methods.length} Item`
              : `${methods.length} Items`
          }
        />
      </darkMode.Provider>
    </>
  );
}

export default App;
