import React from 'react';

const page = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Refund Policy</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Refund Eligibility</h2>
        <p className="mb-4">
          We offer refunds on purchases made directly through our website within 30 days of the purchase date. To be eligible for a refund, the following conditions must be met:
        </p>
        <ul className="list-disc pl-8">
          <li>The request for a refund must be made within 30 days of the purchase date.</li>
          <li>The item must be unused and in the same condition as it was received.</li>
          <li>Any digital products or services must not have been downloaded or used.</li>
          <li>Proof of purchase is required.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Non-Refundable Items</h2>
        <p className="mb-4">
          Certain items are not eligible for refunds. These include:
        </p>
        <ul className="list-disc pl-8">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Digital memberships or subscriptions</li>
          <li>Services that have already been provided</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Refund Process</h2>
        <p className="mb-4">
          To request a refund, please contact our customer support team with your order details. Once your request is received and approved, we will process your refund within 7 business days. Refunds will be issued to the original payment method used for the purchase.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Late or Missing Refunds</h2>
        <p className="mb-4">
          If you haven’t received your refund within the expected timeframe, please first check your bank account. Then, contact your credit card company or bank, as it may take some time for the refund to be officially posted. If you’ve done all of this and still have not received your refund, please contact us at <a href="mailto:contact@example.com">contact@example.com</a>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
        <p>If you have any questions about our refund policy, please contact us:</p>
        <ul className="list-disc pl-8">
          <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
          <li>Phone: 1-800-123-4567</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
