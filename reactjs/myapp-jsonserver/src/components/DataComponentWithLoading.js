//Using the HOC with a simple component:
 
import React, { useState, useEffect } from 'react';
import withLoading from './WithLoading';
 
const DataComponent = () => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    setTimeout(() => {
      setData('Fetched Data From API');
    }, 3000);
  }, []);
 
  return <div>{data}</div>;
};
 
// Wrap the DataComponent with the withLoading HOC
const DataComponentWithLoading = withLoading(DataComponent);
 
export default DataComponentWithLoading;