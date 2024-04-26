import React from "react";

const page = () => {
  return (
    <div className="container md:mt-12 mt-6">
      <h1>Refund Policy</h1>

      <section>
        <h2>Refund Eligibility</h2>
        <p>
          At unlistedbuysell.com, we strive to provide our customers with
          high-quality products and excellent service. However, if for any
          reason you are not satisfied with your purchase, you may be eligible
          for a refund under the following conditions:
        </p>
        <ul>
          <li>
            Refunds are only available within the first 5 days of your order
            being placed.[1]
          </li>
          <li>
            The product must be in its original condition, unused, and with all
            original packaging and accessories intact.[2]
          </li>
          <li>
            Proof of purchase (order number or receipt) must be provided.[3]
          </li>
        </ul>
      </section>

      <section>
        <h2>Refund Process</h2>
        <p>To initiate a refund, please follow these steps:</p>
        <ol>
          <li>
            Contact our customer service team at{" "}
            <a href="mailto:support@unlistedbuysell.com">
              support@unlistedbuysell.com
            </a>{" "}
            within 5 days of placing your order, providing your order number and
            reason for the refund request.[1][4]
          </li>
          <li>
            Once your request is approved, you will receive a return
            authorization number and instructions for returning the product.[2]
          </li>
          <li>
            You are responsible for the shipping costs associated with returning
            the product, unless the product is defective or the return is due to
            our error.[3]
          </li>
          <li>
            Upon receipt and inspection of the returned product, we will process
            your refund within 5-7 business days.[4]
          </li>
        </ol>
      </section>

      <section>
        <h2>Exceptions</h2>
        <p>
          Please note that certain products may be subject to different refund
          policies or may be non-refundable. These exceptions will be clearly
          stated on the product page or in the terms and conditions of the
          specific product.[1][2]
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns regarding our refund policy,
          please contact our customer service team at{" "}
          <a href="mailto:support@unlistedbuysell.com">
            support@unlistedbuysell.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default page;
