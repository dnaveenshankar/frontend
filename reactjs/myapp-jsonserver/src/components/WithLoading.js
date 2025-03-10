import { useState, useEffect } from "react";
// Higher Order Component (HOC)
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {    
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
 
    if (loading) {
      return <div>Loading...</div>;
    }
 
    return <WrappedComponent {...props} />;
  };
};
 
export default withLoading;
 