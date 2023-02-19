import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import Posts from "./components/Posts/Posts";
import Products from "./components/Products/Products";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/products", element: <Products /> },
        {
          path: "/friends",
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: <Friends />,
        },
        {
          path: "friend/:friendId",
          loader: async ({ params }) => {
            console.log(params);
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetails />,
        },
        {
          path: "/posts",
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`);
          },
          element: <Posts />,
        },
        {
          path: "/posts/:postId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails />,
        },
      ],
    },

    { path: "/about", element: <About /> },
    { path: "*", element: <div>This route not found</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
