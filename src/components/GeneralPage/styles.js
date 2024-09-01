import { makeStyles } from "@mui/styles";
import tick from "../../assets/tick.svg";
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0 25px",
    },
  },

  header_container: {
    padding: "25px 0 25px 12px",
    boxShadow: "0px 4px 8px 0px #3971A440",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  header_wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_img: {
    [theme.breakpoints.down("sm")]: {
      width: "52px",
      height: "22px",
    },
  },
  contacts_wrapper: {
    display: "flex",
    gap: "60px",
  },
  contacts: {
    color: theme.palette.link.color,
    textDecoration: "none",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  // AntSwitcher
  checkbox: {
    cursor: "pointer",
    opacity: 0,
    position: "absolute",
    width: 0,
    height: 0,
  },
  checkbox_label: {
    width: "55px",
    height: "26px",
    borderRadius: "30px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
    background: "#155da4",
    transition: "background-color 0.3s ease",
  },
  ball: {
    backgroundColor: "#fff",
    right: "1px",
    width: "20px",
    height: "20px",
    position: "absolute",
    borderRadius: "50%",
    transition: "transform 0.2s linear",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ballChecked: {
    transform: "translateX(-29px)",
  },
  themeImage: {
    width: "17px",
    height: "17px",
    backgroundSize: "cover",
  },
  // table
  table_head: {
    fontSize: "20px",
    color: "#B0B0B0",
    "& tr": {
      "& th": {
        textAlign: "left",
        padding: "28px 12px",
        fontWeight: 500,
        "&:last-child": {
          textAlign: "right",
          padding: "28px 0",
          [theme.breakpoints.down("sm")]: {
            padding: "0 25px 0 0",
          },
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
          padding: 0,
          "&:first-child": {
            paddingLeft: "25px",
          },
          "&:nth-child(2)": {
            paddingLeft: "12px",
          },
          "&:nth-child(3)": {
            paddingLeft: "12px",
            minWidth: "130px",
          },
          "&:last-child": {
            minWidth: "130px",
          },
        },
      },
    },
  },
  table_row: {
    outline: "none",
    cursor: "pointer",
    borderBottom: "1px solid #F2F2F2",
    "&:hover": {
      background: theme.palette.hoverBackground.background,
      borderBottom: "none",
    },
  },
  table_rowCell: {
    // border: "none",
    padding: "28px 12px",
    fontSize: "20px",
    minWidth: "100px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "12px",

      "&:first-child": {
        paddingLeft: "25px",
      },
    },
    "&:last-child": {
      textAlign: "center",
      paddingRight: 0,
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
        paddingRight: "25px",
      },
    },
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
  },
  //menu
  title_options: {
    color: "#292929",
  },
  multi_select: {
    position: "relative",
  },
  multi_selectHeader: {
    display: "flex",
    gap: "12px",
    cursor: "pointer",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
    },
  },
  menu_title: {
    margin: 0,
    fontWeight: 400,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  menu_title_active: {
    color: "#155DA4",
    fontWeight: 500,
  },
  toggle_arrow: {
    transition: "transform 10s ease",
    height: "9px",
    [theme.breakpoints.down("sm")]: {
      width: "12px",
    },
  },
  multi_selectDropDown: {
    position: "absolute",
    borderTop: "1px solid #155da4",

    padding: "20px",
    right: 0,
    width: "267px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
    background: "rgba(255, 255, 255, 1)",
    display: "none",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "224px",
    },
  },
  multi_selectActive: {
    display: "block",
  },
  multi_selectDropDown_option: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    marginBottom: "16px",
    "&:last-child": {
      marginBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginBottom: "12px",
    },
  },
  multi_selectDropDown_options: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  multi_selectDropDown_option_checkbox: {
    width: "19px",
    height: "19px",
    border: "1px solid rgba(21, 93, 164, 1)",
    position: "relative",
    borderRadius: "2px",
    cursor: "pointer",
    appearance: "none",
    margin: 0,
    "&:checked": {
      "&::before": {
        content: '""',
        position: "absolute",
        top: "-1px",
        left: "-1px",
        width: "19px",
        height: "19px",
        backgroundColor: "rgba(21, 93, 164, 1)",
        borderRadius: "2px",
        backgroundImage: `url(${tick})`,
        backgroundSize: "13px 9px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    },
  },

  // listWorkers
  title_listWorkers: {
    fontWeight: 700,
    fontSize: "40px",
    margin: 0,
    gridColumn: "1/2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  menu_listWorkers: {
    gridColumn: "2/3",
  },
  input_listWorkers: {
    gridColumn: "1/3",
    gridRow: "2/3",
    display: "inline-block",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1/2",
    },
  },

  listWorkersWrapper_one: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto 1fr",
    rowGap: "28px",
    margin: "0 auto 28px",
    paddingLeft: "12px",
    maxWidth: "1400px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto auto",
      rowGap: "15px",
      marginBottom: "20px",
      padding: "0 25px",
    },
  },
  listWorkersWrapper_two: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "28px",
    overflowX: "auto",
    maxWidth: "1400px",
    margin: "0 auto",
    // [theme.breakpoints.down("sm")]: {
    //   padding: "0 28px",
    // },
    "&:last-child": {
      marginBottom: 0,
    },
  },
  //multiplemenu
  multipleMenu: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "32px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      gap: "12px",
    },
  },
  //selectedfilters
  selected_container: {
    background: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "25px",
    },
  },
  selected_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0",
    maxWidth: "1400px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "15px 25px",
      alignItems: "stretch",
    },
  },
  selected_button: {
    cursor: "pointer",
    background: "rgba(21, 93, 164, 1)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: "16px",
    borderRadius: "8px",
    padding: "12px 48px",
    border: "none",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  selected_filters_container: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "12px",
      marginBottom: "15px",
      alignItems: "flex-start",
    },
  },
  selected_title: {
    fontSize: "20px",
    fontWeight: 500,
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  point_button: {
    display: "flex",
    gap: 5,
    alignItems: "center",
    background: theme.palette.background.default,
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  point_img: {
    fill: theme.palette.icon.fill,
  },
  point_title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  selected_filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  // customInput
  customInput: {
    fontFamily: "Raleway",
    borderRadius: "5px",
    border: "0.5px solid #B0B0B0",
    outline: "inherit",
    color: "#B0B0B0",
    fontSize: "20px",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  //crumbBread
  crumbs_container: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    padding: "28px 0 28px 12px",
    marginBottom: "15px",
    maxWidth: "1400px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 25px",
      gap: "12px",
    },
  },
  crumb: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      gap: "12px",
      "&:first-child": {
        display: "none",
      },
      "&:last-child": {
        overflow: "hidden",
      },
    },
  },
  crumb_link: {
    textDecoration: "none",
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#B0B0B0",
    fontWeight: "500",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  crumb_text: {},
  arrow_img: {
    [theme.breakpoints.down("sm")]: {
      width: "12px",
      height: "12px",
    },
  },

  //InfoWorkerPage
  worker_img: {
    width: "163px",
    height: "163px",
    borderRadius: "50%",
    gridRow: "1 / span 3",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px",
      gridRow: "1 / span 2",
    },
  },
  // infoWorker_wrapper_top: {
  //   display: "flex",
  //   gap: "40px",
  //   [theme.breakpoints.down("sm")]: {
  //     gap: "16px",
  //   },
  // },
  worker_name: {
    fontSize: "40px",
    fontWeight: 700,
    margin: 0,
    gridRow: "1",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  container_separatly_line: {
    maxWidth: "1400px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  separatly_line: {
    border: "1px solid #F2F2F2",
    margin: "40px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0",
    },
  },
  //GeneralInfo
  container_generaInfo: {
    display: "grid",
    gridTemplateColumns: "163px auto",
    gridTemplateRows: "auto auto auto",
    columnGap: "20px",
    [theme.breakpoints.down("sm")]: {
      columnGap: "16px",
      gridTemplateColumns: "100px auto",
    },
  },
  worker_textContainer: {
    lineHeight: "normal",
    display: "grid",
    gridTemplateRows: "auto auto auto",
    rowGap: "20px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "auto auto",
      rowGap: "10px",
      gridRow: "1 / 3",
    },
  },
  worker_pos: {
    fontWeight: 500,
    fontSize: "24px",
    gridRow: "2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  worker_stack_wrapper: {
    gridRow: "3",
    display: "flex",
    gap: "15px",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1 / span 2",
      marginTop: "15px",
    },
  },
  worker_stack_tool: {
    background: theme.palette.background.paper,
    padding: "10px 22px",
    borderRadius: "5px",
  },
  worker_toolName: {
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  //MainInfo
  container_mainInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    [theme.breakpoints.down("sm")]: {
      gap: "16px",
    },
  },
  mainInfo_title: {
    fontWeight: 600,
    fontSize: "32px",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  mainInfo_list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  mainInfo_list_pointName: {
    margin: 0,
    fontWeight: 500,
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  mainInfo_list_pointValue: {
    fontSize: "24px",
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  mainInfo_list_point: {
    marginBottom: "25px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "12px",
    },
    "&:last-child": {
      marginBottom: 0,
    },
  },
}));

export default useStyles;
