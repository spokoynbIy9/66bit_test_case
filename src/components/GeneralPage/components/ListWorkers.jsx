import MultipleMenu from "./MultipleMenu";
import useStyles from "../styles";
import SelectedFilters from "./SelectedFilters";
import ListWorkersTable from "./ListWorkersTable";
import CustomInput from "./CustomInput";
const ListWorkers = () => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.listWorkersWrapper_one} `}>
        <h1 className={classes.title_listWorkers}>Список сотрудников</h1>
        <MultipleMenu className={classes.menu_listWorkers} />
        <div className={classes.input_listWorkers}>
          <CustomInput></CustomInput>
        </div>
      </div>

      <SelectedFilters></SelectedFilters>
      <div className={`${classes.listWorkersWrapper_two} `}>
        <ListWorkersTable></ListWorkersTable>
      </div>
    </>
  );
};

export default ListWorkers;
