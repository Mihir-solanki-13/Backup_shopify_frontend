import React from 'react';

const BlogDetail = ({ blog }) => {
  return (
    <>
      <div className="my-6">
        <h3 className="font-semibold">Title</h3>
        <p className="text-gray-500 text-sm">{blog.title || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Handle</h3>
        <p className="text-gray-500 text-sm">{blog.handle || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Tags</h3>
        <p className="text-gray-500 text-sm">{blog.tags && blog.tags.length > 0 ? blog.tags.join(', ') : '(no data to view)'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Metafields</h3>
        <p className="text-gray-500 text-sm">{blog.metafields && blog.metafields.length > 0 ? blog.metafields.join(', ') : '(no data to view)'}</p>
      </div>
    </>
  );
};

export default BlogDetail;
