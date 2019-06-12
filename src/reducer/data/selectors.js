import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};
