import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "./pages/homePage";
import PhysicalAssessments from "./pages/physicalAssessments";
import Layout from "./layout/Layout";
import GoalsInterventions from "./pages/goalsInterventions";
import Mileage from "./pages/mileage";
import PlanCare from "./pages/planCare";
import QuestionPage from "./pages/questionPage";

const App = () => {
  function PrivateRoute({ children }) {
    const isAuthenticated = true;
    return isAuthenticated ? children : <Navigate to="/" />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/physicalAssessments",
      element: (
        <PrivateRoute>
          <Layout>
            <PhysicalAssessments />
          </Layout>
        </PrivateRoute>
      )
    },
    {
      path: "/goalsAndInterventions",
      element: (
        <PrivateRoute>
          <Layout>
            <GoalsInterventions />
          </Layout>
        </PrivateRoute>
      )
    },
    {
      path: "/mileage",
      element: (
        <PrivateRoute>
          <Layout>
            <Mileage />
          </Layout>
        </PrivateRoute>
      )
    },
    {
      path: "/:queName/:queId",
      element: (
        <PrivateRoute>
          <Layout>
            <QuestionPage />
          </Layout>
        </PrivateRoute>
      )
    },
    {
      path: "/planOfCare",
      element: (
        <PrivateRoute>
          <Layout>
            <PlanCare />
          </Layout>
        </PrivateRoute>
      )
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
