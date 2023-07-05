import { useSelector } from 'react-redux';

import Listing from './Listing';
import classes from './Listings.module.css';

const Listings = () => {
  const listings = useSelector((state) => state.listings);

  const listingsList = listings.map((listing) => (
    <Listing key={listing.id} listing={listing}></Listing>
  ));

  return <div className={classes.container}>{listingsList}</div>;
};

export default Listings;
