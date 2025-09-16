"use client";

import type React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  bgColor: string;
  textColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  bgColor,
  textColor,
}): React.JSX.Element => {
  return (
    <div className={`${bgColor} rounded-lg border p-4`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};

const TutorStats: React.FC = (): React.JSX.Element => {
  const stats: StatCardProps[] = [
    {
      title: "All",
      value: "40",
      bgColor: "bg-white",
      textColor: "text-gray-900",
    },
    {
      title: "30+",
      value: "30",
      bgColor: "bg-white",
      textColor: "text-gray-900",
    },
    {
      title: "Inactive Students",
      value: "5",
      bgColor: "bg-white",
      textColor: "text-gray-900",
    },
    {
      title: "Top Performing",
      value: "10",
      bgColor: "bg-white",
      textColor: "text-gray-900",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default TutorStats;
