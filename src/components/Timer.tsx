import { useState, useEffect } from "react";

import classes from "../../style/Timer.module.css";
import { Header } from "./Header";

export const Timer = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    // プッシュ通知の実装と、通知音の設定を後日追加予定
    if (time.seconds === 10) {
      console.log("10秒経過");
      // new Notification("10秒経過");
    }
    const interval = setInterval(() => {
      if (timerOn) {
        if (time.seconds < 59) {
          setTime({ minutes: time.minutes, seconds: time.seconds + 1 });
        } else {
          setTime({ minutes: time.minutes + 1, seconds: 0 });
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time, timerOn]);

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

  return (
    <>
      <Header />
      <div className={classes.container}>
        <h1>カウントアップタイマー</h1>
        <h1>
          {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
        </h1>
        <button onClick={startTimer} className={classes.btn}>
          スタート
        </button>
        <button onClick={stopTimer} className={classes.btn}>
          ストップ
        </button>
        <button onClick={resetTimer} className={classes.btn}>
          リセット
        </button>
      </div>
    </>
  );
};
