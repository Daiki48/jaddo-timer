import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "../../style/CountdownTimer.module.css";
import { Header } from "./Header";

export const CountdownTimer = () => {
  const [time, setTime] = useState<{ minutes: number; seconds: number }>({
    minutes: 0,
    seconds: 0,
  });
  const [timerOn, setTimerOn] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        if (time.minutes === 0 && time.seconds === 0) {
          setTimerOn(false);
          playSound();
          toast.info(`カウント終了`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
            icon: "⏲️",
          });
        } else {
          if (time.seconds === 0) {
            setTime({ minutes: time.minutes - 1, seconds: 59 });
          } else {
            setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time, timerOn]);

  const playSound = () => {
    const audio = new Audio("/sound/CalmNotification.mp3");
    audio.play();
  };

  const min = time.minutes;
  const sec = time.seconds;

  const startTimer = () => {
    setTimerOn(true);
  };

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTimerOn(false);
    setTime({ minutes: 0, seconds: 0 });
  };

  const setmin60 = () => {
    setTime({ minutes: time.minutes + 60, seconds: time.seconds });
  };

  const setmin10 = () => {
    setTime({ minutes: time.minutes + 10, seconds: time.seconds });
  };

  const setmin5 = () => {
    setTime({ minutes: time.minutes + 5, seconds: time.seconds });
  };

  const setmin1 = () => {
    setTime({ minutes: time.minutes + 1, seconds: time.seconds });
  };

  const setsec30 = () => {
    if (time.seconds > 30) {
      // const over = time.seconds + 30 - 60;
      const over = time.seconds - 30;
      setTime({ minutes: time.minutes + 1, seconds: over });
    } else {
      setTime({ minutes: time.minutes, seconds: time.seconds + 30 });
    }
  };

  const setsec10 = () => {
    if (time.seconds >= 50) {
      setTime({ minutes: time.minutes + 1, seconds: 0 });
    } else {
      setTime({ minutes: time.minutes, seconds: time.seconds + 10 });
    }
  };

  const manualSet = () => {};

  return (
    <>
      <Header />
      <div className={classes.container}>
        <ToastContainer />
        <h1 className={classes.timerview}>
          {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
        </h1>
        <div className={classes.timesetmin}>
          <button onClick={setmin60} className={classes.btn}>
            60分
          </button>
          <button onClick={setmin10} className={classes.btn}>
            10分
          </button>
          <button onClick={setmin5} className={classes.btn}>
            5分
          </button>
          <button onClick={setmin1} className={classes.btn}>
            1分
          </button>
        </div>
        <div className={classes.timesetsec}>
          <button onClick={setsec30} className={classes.btn}>
            30秒
          </button>
          <button onClick={setsec10} className={classes.btn}>
            10秒
          </button>
        </div>
        {/* <div className={classes.manualinput}>
          <input type="number" />
          <p>:</p>
          <input type="number" />
          <button
            onClick={manualSet}
            disabled={timerOn}
            className={classes.btn}
          >
            セット
          </button>
        </div> */}
        <div className={classes.processbtn}>
          <button
            onClick={startTimer}
            className={classes.btn}
            disabled={timerOn}
          >
            スタート
          </button>
          <button
            onClick={stopTimer}
            className={classes.btn}
            disabled={!timerOn}
          >
            ストップ
          </button>
          <button
            onClick={resetTimer}
            className={classes.btn}
            disabled={timerOn}
          >
            リセット
          </button>
        </div>
      </div>
    </>
  );
};
