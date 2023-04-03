import { Link } from "react-router-dom";

import classes from "../../style/Header.module.css";

export const Header = () => {
  return (
    <div className={classes.container}>
      {/* <h1 className={classes.title}>
        <Link to="/" className={classes.link}>
          じゃっど！タイマー
        </Link>
      </h1> */}
      <nav>
        <ul className={classes.navigation}>
          <li className={classes.navigationchild}>
            <Link to="/" className={classes.link}>
              ホーム
            </Link>
          </li>
          <li className={classes.navigationchild}>
            <Link to="/timer" className={classes.link}>
              カウントアップ
            </Link>
          </li>
          <li className={classes.navigationchild}>
            <Link to="/countdowntimer" className={classes.link}>
              カウントダウン
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
