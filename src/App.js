import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Clubs from "./pages/clubs/Clubs";
import Register from "./pages/register/Register";
import "./style.scss";

//React imports
import { library } from "@fortawesome/fontawesome-svg-core"; //allows later to just use icon name to render-them
import { far } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import LeftBar from "./components/leftBar/LeftBar";
import Profile from "./pages/profile/Profile";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import LeftBarClubs from "./components/leftBarClubs/LeftBarClubs";
import GTech from "./pages/clubs/gTech/GTech";
import LIA from "./pages/clubs/lia/LIA";
import MMD from "./pages/clubs/mmd/MMD";
import Rovers from "./pages/clubs/rovers/Rovers";
import Integrity from "./pages/clubs/integrity/Integrity";
import Tarayana from "./pages/clubs/tarayana/Tarayana";
import Startup from "./pages/clubs/startup/Startup";
import NewClubRegister from "./pages/clubs/newClubRegister/NewClubRegister";
import NewClubForm from "./components/newClubRegistrationForm/NewClubForm";
import Polls from "./pages/polls/Polls";

library.add(far, faThumbsUp, faComment, faArrowUpFromBracket);

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }} className="mainBody">
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const Club = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }} className="motherContainer">
            <LeftBarClubs />
            <div style={{ flex: 9 }}>
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const Poll = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }} className="motherContainer">
            <LeftBarClubs />
            <div style={{ flex: 9 }}>
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/clubs",
      element: (
        <ProtectedRoute>
          <Poll />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/clubs",
          element: <Clubs />,
        },
        {
          path: "/clubs/new-club-register",
          element: <NewClubRegister />,
        },
        {
          path: "/clubs/gtech",
          element: <GTech />,
        },
        {
          path: "/clubs/lia",
          element: <LIA />,
        },
        {
          path: "/clubs/mmd",
          element: <MMD />,
        },
        {
          path: "/clubs/rovers",
          element: <Rovers />,
        },
        {
          path: "/clubs/integrity",
          element: <Integrity />,
        },
        {
          path: "/clubs/tarayana",
          element: <Tarayana />,
        },
        {
          path: "/clubs/startup",
          element: <Startup />,
        },
      ],
    },
    {
      path: "/polls",
      element: (
        <ProtectedRoute>
          <Poll />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/polls",
          element: <Polls />,
        },
        {
          path: "/polls/new-clubs",
          element: <NewClubRegister />,
        },
        // {
        //   path: "/clubs/new-presidents",
        //   element: <GTech />,
        // },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
