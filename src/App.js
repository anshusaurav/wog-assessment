import React, { Suspense, lazy } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.scss";
const QuestionOne = lazy(() => import("./pages/QuestionOne"));
const QuestionTwo = lazy(() => import("./pages/QuestionTwo"));
const HomePage = lazy(() => import("./pages/Home"));

function App({ columns, boxCount }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="question_1"
            element={
              <Suspense fallback={<>...</>}>
                <QuestionOne />
              </Suspense>
            }
          />
          <Route
            path="question_2"
            element={
              <Suspense fallback={<>...</>}>
                <QuestionTwo />
              </Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return <Outlet />;
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
