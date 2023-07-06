import classes from './Skills.module.css';

const Skills = (props) => {
  return (
    <span className={classes.skill} key={props.skill}>
      {props.skill}
    </span>
  );
};

export default Skills;
