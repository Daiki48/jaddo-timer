import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";
import { Timer } from "./components/Timer";
import { CountdownTimer } from "./components/CountdownTimer";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/countdowntimer" element={<CountdownTimer />} />
      </Routes>
    </>
  );
};
