import sun from "../../../assets/sun.png";
import moon from "../../../assets/moon.png";
import useStyles from "../styles";
import { useTheme } from "../../../contexts/ThemeContext";
const AntSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const classes = useStyles({ isDarkMode });
  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={isDarkMode}
        onClick={toggleTheme}
        className={classes.checkbox}
      />
      <label htmlFor="checkbox" className={classes.checkbox_label}>
        <span
          className={`${classes.ball} ${isDarkMode ? classes.ballChecked : ""}`}
        >
          <img
            src={isDarkMode ? sun : moon}
            alt={isDarkMode ? "sun" : "moon"}
            className={classes.themeImage}
          />
        </span>
      </label>
    </>
  );
};
export default AntSwitch;
