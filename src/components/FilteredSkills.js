import classes from './FilteredSkills.module.css';

const FilteredSkills = (props) => {
  const deleteSkill = () => {
    props.onRemove(props.skill);
  };

  return (
    <div className={classes.skill}>
      <span className={classes.skill__text}>{props.skill}</span>
      <span className={classes.skill__icon} onClick={deleteSkill}>
        X
      </span>
    </div>
  );
};

export default FilteredSkills;
