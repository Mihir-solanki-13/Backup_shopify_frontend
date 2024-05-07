import React from 'react';

const CustomCollectionDetail = ({ collection }) => {
  return (
    <>
      <div className="my-6">
        <h3 className="font-semibold">Title</h3>
        <p className="text-gray-500 text-sm">{collection.title || 'no data'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Handle</h3>
        <p className="text-gray-500 text-sm">{collection.handle}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Description</h3>
        <p className="text-gray-500 text-sm">{collection.body_html || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Number of products in this collection</h3>
        <p className="text-gray-500 text-sm">{collection.products_count}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Product sort</h3>
        <p className="text-gray-500 text-sm">{collection.sort_order}</p>
      </div>
    </>
  );
};

export default CustomCollectionDetail;
