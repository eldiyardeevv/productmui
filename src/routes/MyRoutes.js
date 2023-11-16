import React from "react";
import { Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  let PATH = [
    { link: "/", element: <></>, id: 1 },
    { link: "/", element: <></>, id: 2 },
    { link: "/", element: <></>, id: 3 },
  ];
  return (
    <>
      <Routes>
        {PATH.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
