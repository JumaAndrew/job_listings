import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { useState } from 'react';
import FilteredSkills from './FilteredSkills';
import { listingsActions } from '../store/base';

const Header = () => {
  const filtered = useSelector((state) => state.listings.filtered);
  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] = useState(new Set());

  let selectedSkillsArray;
  const updatedSet = new Set(selectedSkills);

  const selectHandler = (e) => {
    updatedSet.add(e.target.value);
    setSelectedSkills(updatedSet);
  };

  if (selectedSkills.size > 0) {
    selectedSkillsArray = Array.from(selectedSkills);
  } else {
    dispatch(listingsActions.restore());
  }

  const deleteSkill = (skill) => {
    updatedSet.delete(skill);
    setSelectedSkills(updatedSet);
  };

  const filteredSkills = selectedSkillsArray?.map((skill) => (
    <FilteredSkills
      key={skill.id}
      skill={skill}
      onRemove={deleteSkill}
    ></FilteredSkills>
  ));

  const filterHandler = () => {
    dispatch(listingsActions.filter(selectedSkillsArray));
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.filters}>
          <select onChange={selectHandler}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">Javascript</option>
            <option value="Sass">Sass</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
            <option value="Ruby">Ruby</option>
            <option value="RoR">RoR</option>
            <option value="Vue">Vue</option>
            <option value="Django">Django</option>
          </select>
          <div className={classes.filter__skills}>{filteredSkills}</div>
          {selectedSkills.size > 0 && (
            <span onClick={filterHandler} className={classes.filter__action}>
              Filter
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
