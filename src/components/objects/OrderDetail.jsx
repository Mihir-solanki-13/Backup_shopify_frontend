import React from 'react';

const OrderDetail = ({ order }) => {
  
  return (
    <>
      <div className="my-6">
        <h3 className="font-semibold">Title</h3>
        <p className="text-gray-500 text-sm">{order.name}</p>
      </div>


      <div className="my-6">
  <h3 className="font-semibold">Line Items</h3>
  {order.line_items && order.line_items.length > 0 ? (
    <table className="table-auto text-sm" style={{ width: '100%', height: '20px' }}>
      <thead>
        <tr>
          <th className="px-2 py-1 w-3/5">Title</th>
          <th className="px-2 py-1">Sku</th>
          <th className="px-2 py-1">Price</th>
          <th className="px-2 py-1">Quantity</th>
          <th className="px-2 py-1">Properties</th>
        </tr>
      </thead>
      <tbody>
        {order.line_items.map(item => (
          <tr key={item.id}>
            <td className="border px-2 py-1">{item.title}</td>
            <td className="border px-2 py-1">{item.sku}</td>
            <td className="border px-2 py-1">{item.price}</td>
            <td className="border px-2 py-1">{item.quantity}</td>
            <td className="border px-2 py-1">{item.properties}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No line items to display</p>
  )}
</div>



      <div className="my-6">
        <h3 className="font-semibold">Total Price</h3>
        <p>{order.total_price || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Email</h3>
        <p>{order.email || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Phone</h3>
        <p>{order.phone || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Note</h3>
        <p>{order.note || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Currency</h3>
        <p>{order.currency || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Financial Status</h3>
        <p>{order.financial_status || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Customer</h3>
        <p>{order.customer || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Shipping Address</h3>
        {order.shipping_address ? (
          <>
            <p>Name: {order.shipping_address.name}</p>
            <p>Phone: {order.shipping_address.phone}</p>
            <p>Address1: {order.shipping_address.address1}</p>
            <p>Address2: {order.shipping_address.address2}</p>
            <p>City: {order.shipping_address.city}</p>
            <p>Company: {order.shipping_address.company}</p>
            <p>Country: {order.shipping_address.country}</p>
            <p>Country Code: {order.shipping_address.country_code}</p>
            <p>Province: {order.shipping_address.province}</p>
            <p>Province Code: {order.shipping_address.province_code}</p>
          </>
        ) : (
          <p>No data to view</p>
        )}
      </div>

      <div className="my-6">
        <h3 className="font-semibold">Billing Address</h3>
        {order.billingAddress ? (
          <>
            <p>Name: {order.billingAddress.name}</p>
            <p>Phone: {order.billingAddress.phone}</p>
            <p>Address1: {order.billingAddress.address1}</p>
            <p>Address2: {order.billingAddress.address2}</p>
            <p>City: {order.billingAddress.city}</p>
            <p>Company: {order.billingAddress.company}</p>
            <p>Country: {order.billingAddress.country}</p>
            <p>Country Code: {order.billingAddress.country_code}</p>
            <p>Province: {order.billingAddress.province}</p>
            <p>Province Code: {order.billingAddress.province_code}</p>
          </>
        ) : (
          <p>No data to view</p>
        )}
      </div>
    </>
  );
};

export default OrderDetail;
