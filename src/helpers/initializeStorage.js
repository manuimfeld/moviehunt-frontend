const initializeLocalStorage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  if (!favorites) {
    // If localStorage is empty, initialize with []
    localStorage.setItem("favorites", JSON.stringify([]));
  }
};

export default initializeLocalStorage;
