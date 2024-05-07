import React from 'react';

const PageDetail = ({ page }) => {
  return (
    <>
      <div className="my-6">
        <h3 className="font-semibold">Title</h3>
        <p className="text-gray-500 text-sm">{page.title}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Author</h3>
        <p className="text-gray-500 text-sm">{page.author || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Handle</h3>
        <p className="text-gray-500 text-sm">{page.handle}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Page</h3>
        <p className="text-gray-500 text-sm">{page.body_html || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Metafields</h3>
        <p className="text-gray-500 text-sm">{page.metafields || 'No data to view'}</p>
      </div>
    </>
  );
};

export default PageDetail;
