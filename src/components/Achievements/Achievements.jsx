import React from "react";
import { FaTrophy, FaCode, FaMedal, FaStar } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      id: 0,
      title: "LeetCode & HackerRank Coding Excellence",
      icon: <FaTrophy className="text-yellow-500 text-3xl" />,
      description:
        "Demonstrated exceptional consistency and dedication in competitive programming through daily coding practice and algorithmic problem-solving.",
      points: [
        {
          label: "Coding Streak Achievements",
          text: "Earned LeetCode 50-Day & 100-Day Coding Streak Badges, recognizing consistent daily learning and strong long-term coding discipline.",
        },
        {
          label: "HackerRank Recognition",
          text: "Secured Gold Badge in Java on HackerRank, showcasing proficiency in core Java programming and problem-solving capabilities.",
        },
      ],
    },
    {
      id: 1,
      title: "Competitive Programming Milestones",
      icon: <FaCode className="text-purple-500 text-3xl" />,
      description:
        "Built a strong foundation in Data Structures and Algorithms through extensive practice and problem-solving across multiple platforms.",
      points: [
        {
          label: "LeetCode Problem Solving",
          text: "Solved 350+ coding problems on LeetCode, covering diverse topics including arrays, strings, dynamic programming, graphs, and trees.",
        },
        {
          label: "GeeksforGeeks Practice",
          text: "Completed 50+ problems on GeeksforGeeks, strengthening core DSA concepts and improving competitive problem-solving skills.",
        },
      ],
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Highlighting my competitive programming journey and key accomplishments
          in algorithmic problem-solving
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-800 rounded-full">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {achievement.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">{achievement.description}</p>

              {/* Points */}
              <div className="space-y-4">
                {achievement.points.map((point, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500"
                  >
                    <div className="flex items-start gap-2">
                      <FaMedal className="text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {point.label}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Problems Solved", value: "400+" },
          { label: "Coding Streaks", value: "100 Days" },
          { label: "Badges Earned", value: "3" },
          { label: "Platforms", value: "3+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-center hover:border-purple-500 transition-colors"
          >
            <FaStar className="text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

