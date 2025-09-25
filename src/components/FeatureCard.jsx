import React from 'react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
