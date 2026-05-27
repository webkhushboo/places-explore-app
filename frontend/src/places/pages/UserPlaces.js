import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description:
      'One of the most famous sky scrapers in the world, standing at 1,454 feet tall.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484474,
      lng: -73.9871516
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Eiffel Tower',
    description:
      'The iconic iron lattice tower on the Champ de Mars in Paris, France.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/400px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris',
    location: {
      lat: 48.8588443,
      lng: 2.2943506
    },
    creator: 'u1'
  },
  {
    id: 'p3',
    title: 'Golden Gate Bridge',
    description:
      'A suspension bridge spanning the Golden Gate strait in San Francisco.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/400px-GoldenGateBridge-001.jpg',
    address: 'Golden Gate Bridge, San Francisco, CA',
    location: {
      lat: 37.8199286,
      lng: -122.4782551
    },
    creator: 'u1'
  }
];

const UserPlaces = () => {
  const { userId } = useParams();

  const [loadedPlaces] = useState(
    DUMMY_PLACES.filter(place => place.creator === userId)
  );

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
