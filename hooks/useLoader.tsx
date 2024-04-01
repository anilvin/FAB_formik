import React, { useState } from 'react';
import LoaderComp from '../components/loader';

function useLoader():[undefined | JSX.Element, ()=>void, ()=>void] {
  const [loading, setLoading] = useState<boolean>(false);
  return [loading ? <LoaderComp /> : undefined,
    () => { setLoading(true); },
    () => { setLoading(false); },
  ];
}

export default useLoader;
