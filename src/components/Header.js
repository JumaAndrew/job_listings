import { useDispatch } from 'react-redux';
import { useState } from 'react';

import classes from './Header.module.css';
import FilteredSkills from './FilteredSkills';
import { listingsActions } from '../store/base';

const Header = () => {
  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] = useState(new Set());

  const restoreListings = () => {
    dispatch(listingsActions.restore());
  };

  let selectedSkillsArray;
  const updatedSet = new Set(selectedSkills);

  const selectHandler = (e) => {
    updatedSet.add(e.target.value);
    setSelectedSkills(updatedSet);
  };

  if (selectedSkills.size > 0) {
    selectedSkillsArray = Array.from(selectedSkills);
  } else {
    restoreListings();
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

  const clearFilter = () => {
    updatedSet.clear();
    setSelectedSkills(updatedSet);
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.filters}>
          <select onChange={selectHandler}>
            <option value="" selected>
              Filter Skills
            </option>
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
            <>
              <span
                onClick={filterHandler}
                className={classes.filter__action_filter}
              >
                Filter
              </span>
              <span
                className={classes.filter__action_clear}
                onClick={clearFilter}
              >
                Clear
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
