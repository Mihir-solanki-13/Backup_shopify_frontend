import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <>
    
      <div className="my-6">
        <h3 className="font-semibold">Title</h3>
        <p className="text-gray-500 text-sm">{product.title}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Description</h3>
        <p className="text-gray-500 text-sm">{product.body_html || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Vendor</h3>
        <p className="text-gray-500 text-sm">{product.vendor || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Status</h3>
        <p className="text-gray-500 text-sm">{product.status || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Product type</h3>
        <p className="text-gray-500 text-sm">{product.product_type || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">custom product type </h3>
        <p className="text-gray-500 text-sm"> </p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Tags</h3>
        <div>
          {product.tags && product.tags.split(',').map((tag, index) => (
            <span key={index} className="text-xs m-1 rounded-full px-2 py-1 bg-blue-200 text-blue-600">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Images </h3>
        <p className="text-gray-500 text-sm">{product.images || 'No data to view'}</p>
      </div>
      {/* <div className="my-6">
        <h3 className="font-semibold">options </h3>
        <p className="text-gray-500 text-sm">{product.status || 'No data to view'}</p>
      </div> */}

<div className="my-6">
  <h3 className="font-semibold text-sm">Variants</h3>
  {product.variants && product.variants.length > 0 ? (
    <table className="table-auto text-sm">
      <thead>
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Compare at price</th>
          <th className="px-4 py-2">Weight</th>
          <th className="px-4 py-2">SKU</th>
          <th className="px-4 py-2">Barcode</th>
        </tr>
      </thead>
      <tbody>
        {product.variants.map(variant => (
          <tr key={variant.id}>
            <td className="border px-4 py-2">{variant.title}</td>
            <td className="border px-4 py-2">{variant.price}</td>
            <td className="border px-4 py-2">{variant.compare_at_price || '-'}</td>
            <td className="border px-4 py-2">{variant.weight} {variant.weight_unit}</td>
            <td className="border px-4 py-2">{variant.sku}</td>
            <td className="border px-4 py-2">{variant.barcode || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="text-gray-500 text-sm">No data to view</p>
  )}
</div>


    
    </>
  );
};

export default ProductDetail;
