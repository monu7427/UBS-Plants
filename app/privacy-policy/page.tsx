import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information Collection and Use</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          magna id eros ullamcorper dictum. Vivamus vulputate nisl at ex gravida,
          at efficitur enim vehicula.
        </p>
        <p className="mb-4">
          Phasellus maximus mauris ut nisi placerat, nec congue mauris lacinia.
          Vestibulum efficitur nibh non nisi tincidunt, vel vestibulum libero
          rhoncus.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Log Data</h2>
        <p className="mb-4">
          Duis nec ex vestibulum, dignissim mauris eget, laoreet magna. Mauris
          dignissim posuere velit, vel accumsan nisi tristique et.
        </p>
        <p className="mb-4">
          Nunc tempor justo quis leo gravida, id ullamcorper magna vestibulum.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Cookies</h2>
        <p className="mb-4">
          Integer nec nunc laoreet, vehicula sapien vitae, ultricies justo.
          Proin id enim sit amet eros mattis fringilla.
        </p>
        <p className="mb-4">
          Nam tincidunt tincidunt odio, eget vestibulum risus dictum vel.
          Donec id dui nec orci convallis hendrerit id vitae purus.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">4. Contact Us</h2>
        <p>If you have any questions about our privacy policy, please contact us:</p>
        <ul className="list-disc pl-8">
          <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
          <li>Phone: 1-800-123-4567</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
