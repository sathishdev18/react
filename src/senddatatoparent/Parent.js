// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './child';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState('fetching data..');

  const handleDataFromChild = (childData) => {
    setDataFromChild(childData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child: {dataFromChild}</p>
      <ChildComponent onData={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
