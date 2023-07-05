import classes from './Listing.module.css';
import Skills from './Skills';

const Listing = (props) => {
  const { listing } = props;
  const toolsAndLanguages = listing.languages.concat(listing.tools);

  const skill = toolsAndLanguages.map((item) => (
    <Skills key={item.id} skill={item}></Skills>
  ));

  return (
    <div className={classes.listing}>
      <div className={classes.listing__header}>
        <img
          className={classes.listing__image}
          src="../assets/images/image-anne.jpg"
          alt={`${listing.company} logo`}
        />
        <div className={classes.listing__details}>
          <span className={classes.listing__companyName}>
            {listing.company}
          </span>
          <span className={classes.listing__new}>
            {listing.new ? 'new!' : ''}
          </span>
          <span className={classes.listing__featured}>
            {listing.featured ? 'featured' : ''}
          </span>
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
