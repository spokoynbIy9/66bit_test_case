import useStyles from "../styles";
import logo from "../../../assets/logotype.png";
import AntSwitch from "./AntSwitch";
const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header_container}>
      <div className={`${classes.container} ${classes.header_wrapper}`}>
        <img src={logo} alt="Logo" className={classes.header_img} />
        <div className={classes.contacts_wrapper}>
          <a className={classes.contacts} href="tel:+73432908476">
            +7 343 290 84 76
          </a>
          <a className={classes.contacts} href="mailto:info@66bit.ru">
            info@66bit.ru
          </a>
          <AntSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
