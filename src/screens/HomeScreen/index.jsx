import React, { useState, useEffect } from 'react';

const HomeScreen  = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("HomeScreen mounted!");
  }, []);

  return(
    <></>
  )
}
export default HomeScreen;