
import React from 'react';
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
   
  >
    <div className="flex items-start space-x-4 p-4 hover:bg-slate-500/45 bg-slate-500/25 border-blue-600/75 border rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="dark:text-gray-400">{description}</p>
      </div>
    </div>
    </motion.div>
  );
};

export default FeatureCard;
