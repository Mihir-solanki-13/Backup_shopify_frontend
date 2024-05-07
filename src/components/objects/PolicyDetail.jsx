import React from 'react';

const PolicyDetail = ({ theme }) => {
  return (
    <>
    
      <div className="my-6">
        <h3 className="font-semibold">Title</h3>
        <p className="text-gray-500 text-sm">{theme.name}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Description</h3>
        <p className="text-gray-500 text-sm">{theme.role || 'No data to view'}</p>
      </div>
      

    
    </>
  );
};

export default PolicyDetail;
