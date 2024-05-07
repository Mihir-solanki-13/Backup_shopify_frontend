import React from 'react';

const CustomerDetail = ({ customer }) => {
  return (
    <>
      <div className="my-6">
        <h3 className="font-semibold">Name</h3>
        <p className="text-gray-500 text-sm">{customer.first_name} {customer.last_name}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Tags</h3>
        <p className="text-gray-500 text-sm">{customer.tags || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Email</h3>
        <p className="text-gray-500 text-sm">{customer.email}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Phone</h3>
        <p className="text-gray-500 text-sm">{customer.phone}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Default Address</h3>
        <p className="text-gray-500 text-sm">{customer.default_address ? `${customer.default_address.address1}, ${customer.default_address.city}, ${customer.default_address.province}, ${customer.default_address.country}` : 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Last Order Name</h3>
        <p className="text-gray-500 text-sm">{customer.last_order_name || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Note</h3>
        <p className="text-gray-500 text-sm">{customer.note || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Orders Count</h3>
        <p className="text-gray-500 text-sm">{customer.orders_count || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Currency</h3>
        <p className="text-gray-500 text-sm">{customer.currency}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">Total Spent</h3>
        <p className="text-gray-500 text-sm">{customer.total_spent || 'No data to view'}</p>
      </div>
      <div className="my-6">
        <h3 className="font-semibold">SMS Marketing Consent</h3>
        <p className="text-gray-500 text-sm">State: {customer.sms_marketing_consent.state}<br />Opt-in level: {customer.sms_marketing_consent.opt_in_level}<br />Consent collected from: {customer.sms_marketing_consent.consent_collected_from || 'No data'}<br />Consent updated at: {customer.sms_marketing_consent.consent_updated_at || '-'}</p>
      </div>
      <hr />
      <div className="my-6">
        <h3 className="font-semibold">Email Marketing Consent</h3>
        <p className="text-gray-500 text-sm">State: {customer.email_marketing_consent.state}<br />Opt-in level: {customer.email_marketing_consent.opt_in_level}<br />Consent collected from: {customer.email_marketing_consent.consent_collected_from || 'No data'}<br />Consent updated at: {customer.email_marketing_consent.consent_updated_at || '-'}</p>
      </div>
    </>
  );
};

export default CustomerDetail;
