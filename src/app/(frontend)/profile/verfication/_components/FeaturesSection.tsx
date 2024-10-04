
import React from 'react';


import FeatureCard from './featuresCard';

import { siteConfig } from '@/config/site';


const FeaturesSection: React.FC = () => {
 

  return (
    <section className="my-12 py-12 hover:bg-slate-700/35 bg-slate-700/25 rounded-md">
      <div className=" ">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Upgrade to Premium?</h2>
        <div className="grid grid-cols-1 mt-8 md:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteConfig?.features?.map((feature, index) => (
            <FeatureCard
              key={index}
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
