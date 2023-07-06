import { useSelector } from 'react-redux';

import Listing from './Listing';
import classes from './Listings.module.css';

const Listings = () => {
  const listingsImport = useSelector((state) => state.listings.listingData);
  const listingsSet = new Set();

  listingsImport.forEach((listing) => {
    listingsSet.add(listing);
  });

  const listings = Array.from(listingsSet);

  const listingsList = listings.map((listing) => (
    <Listing key={listing.id} listing={listing}></Listing>
  ));

  return <div className={classes.container}>{listingsList}</div>;
};

export default Listings;
