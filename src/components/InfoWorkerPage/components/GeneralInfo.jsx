import useStyles from "../../GeneralPage/styles";

const GeneralInfo = ({ name, position, stack, photo }) => {
  const classes = useStyles();
  return (
    <div className={classes.container_generaInfo}>
      <img className={classes.worker_img} src={photo} alt="" />
      <div className={classes.worker_textContainer}>
        <h3 className={classes.worker_name}>{name}</h3>
        <span className={classes.worker_pos}>{position}</span>
      </div>
      <div className={classes.worker_stack_wrapper}>
        {stack?.map((instrument) => (
          <div key={instrument} className={classes.worker_stack_tool}>
            <span className={classes.worker_toolName}>{instrument}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralInfo;
