import { useEffect, useState } from 'react';
import { sanityClient } from './sanityClient';
import { sanityQueries } from './sanityQueries.const';

export function useSanityData () {
  const [ sanityData, setSanityData ] = useState();

  useEffect(() => {
    sanityClient
      .fetch(sanityQueries)
      .then((data) => {
        setSanityData(data)
      })
      .catch((error) => console.error(error));
  }, []);

  return sanityData
};
