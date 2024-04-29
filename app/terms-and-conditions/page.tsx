import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Please read these terms and conditions carefully before using Our Service.
      </p>
      <h2 className="text-xl font-semibold mb-2">Interpretation and Definitions</h2>
      <p className="mb-4">
        Interpretation<br />
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>
      <h2 className="text-xl font-semibold mb-2">Ordering Process</h2>
      <p className="mb-4">
        To place an order with us, you must first create an account and provide accurate information about the delivery address and contact details. By placing an order, you agree to our terms and conditions.
      </p>
      <h2 className="text-xl font-semibold mb-2">Payment Terms</h2>
      <p className="mb-4">
        Payment for orders must be made at the time of purchase. We accept major credit cards and other payment methods as specified on our website. Prices are subject to change without notice.
      </p>
      <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
      <p className="mb-4">
        We aim to ship orders within [X] business days of receiving payment. Shipping costs and estimated delivery times will be provided at the time of checkout. We are not responsible for delays caused by shipping carriers or unforeseen circumstances.
      </p>
      <h2 className="text-xl font-semibold mb-2">Return Policy</h2>
      <p className="mb-4">
        If you are not completely satisfied with your purchase, you may return it within [X] days for a full refund, minus shipping costs. Plants must be returned in their original condition. Please contact us to initiate a return.
      </p>
      {/* Add more sections as needed */}
    </div>
  );
}

export default page;

