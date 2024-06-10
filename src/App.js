import "./App.css";
import BookShelf from "./pages/BookShelf";
import SearchBook from "./pages/SearchBook";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchBook />,
    },
    {
      path: "/BookShelf",
      element: <BookShelf />,
    },
    {
      path: "*",
      element: <h1>404-Page not found (custom error page)</h1>,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
