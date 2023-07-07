import classes from './Listing.module.css';
import Skills from './Skills';

const Listing = (props) => {
  const { listing } = props;

  const toolsAndLanguages = listing.languages.concat(listing.tools);

  const skill = toolsAndLanguages.map((item) => (
    <Skills key={item.id} skill={item}></Skills>
  ));

  return (
    <div
      className={`${classes.listing} ${
        listing.new ? classes.listing__has : ''
      }`}
    >
      <div className={classes.listing__header}>
        <img
          className={classes.listing__image}
          src={listing.logo}
          alt="company logo"
        />
        <div className={classes.listing__details}>
          <span className={classes.listing__companyName}>
            {listing.company}
          </span>
          {listing.new && <span className={classes.listing__new}>New!</span>}
          {listing.featured && (
            <span className={classes.listing__featured}>Featured</span>
          )}

          <p className={classes.listing__designation}>{listing.position}</p>
          <span className={classes.listing__posted}>{listing.postedAt}</span>
          <span className={classes.listing__contract}>{listing.contract}</span>
          <span className={classes.listing__location}>{listing.location}</span>
        </div>
      </div>
      <div className={classes.listing__skills}>
        <span>{listing.role}</span>
        <span>{listing.level}</span>
        {skill}
      </div>
    </div>
  );
};

export default Listing;
