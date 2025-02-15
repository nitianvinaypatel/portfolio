"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import vinay from "@/public/vinay.jpg";
import leetcode from "@/public/leetcode.png";
import gfg from "@/public/gfg.png";
import { OrbitingCirclesDemo } from "./OrbitingCircles";
import AboutContent from "./AboutContent";
import LeetCode from "@/components/LeetCode";
import GFG from "@/components/GFG";
import Loader from "@/components/Loader";
import Link from "next/link";

export function WobbleCardDemo() {
  const [leetCodeStats, setLeetCodeStats] = useState<{
    totalQuestions: number;
    totalSolved: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    acceptanceRate: number;
    ranking: number;
  } | null>(null);
  const [gfgStats, setGfgStats] = useState<{
    totalProblemsSolved: number;
    codingScore: number;
    instituteRank: number;
    basic: number;
    easy: number;
    medium: number;
    hard: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [leetRes, gfgRes] = await Promise.all([
          fetch("/api/leetcode", { cache: "no-store" }),
          fetch("/api/gfg", { cache: "no-store" }),
        ]);

        const leetData = await leetRes.json();
        const gfgData = await gfgRes.json();

        if (leetRes.ok) setLeetCodeStats(leetData);
        else console.error("LeetCode API Error:", leetData);

        // if (gfgRes.ok) setGfgStats(gfgData);
        if (gfgRes.ok) {
          setGfgStats({
            totalProblemsSolved: gfgData.totalProblemsSolved,
            codingScore: gfgData.codingScore,
            instituteRank: gfgData.instituteRank,
            basic: gfgData.basic,
            easy: gfgData.easy,
            medium: gfgData.medium,
            hard: gfgData.hard,
          });
        } else console.error("GFG API Error:", gfgData);
      } catch (error) {
        console.error("Fetching data failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[700px] lg:min-h-[280px]">
        <AboutContent />
        <Image
          src={vinay}
          width={400}
          height={400}
          alt="Vinay's Image"
          className="absolute lg:h-[400px] h-[400px] filter lg:bottom-1 lg:right-1 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[400px]">
        <OrbitingCirclesDemo />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[400px]">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LeetCode Stats Card */}
          <div className="flex lg:w-1/2  justify-center items-center h-[50%] p-5 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-300 dark:border-gray-700">
            <Link
              href="https://leetcode.com/vinaypatel_nitmz/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <div className="flex flex-col  gap-4">
                {/* Header Section */}
                <div className="flex justify-between items-center gap-5">
                  <div className="flex items-center gap-1 ">
                    <Image
                      src={leetcode}
                      width={30}
                      height={30}
                      alt="LeetCode Logo"
                      className="rounded-full"
                    />
                    <h2 className="text-sm lg:text-md font-semibold text-gray-800 dark:text-gray-200">
                      LeetCode
                    </h2>
                  </div>
                  <h2 className="text-sm lg:text-md text-green-500">
                    🎖️ Global Rank : {leetCodeStats?.ranking ?? "Loading..."}
                  </h2>
                </div>

                {/* Main Content */}
                <div className="flex justify-center items-center text-gray-700 dark:text-gray-300">
                  {loading ? (
                    <Loader />
                  ) : leetCodeStats ? (
                    <LeetCode
                      totalQuestions={leetCodeStats.totalQuestions}
                      totalSolved={leetCodeStats.totalSolved}
                      easySolved={leetCodeStats.easySolved}
                      totalEasy={leetCodeStats.totalEasy}
                      mediumSolved={leetCodeStats.mediumSolved}
                      totalMedium={leetCodeStats.totalMedium}
                      hardSolved={leetCodeStats.hardSolved}
                      totalHard={leetCodeStats.totalHard}
                      acceptanceRate={leetCodeStats.acceptanceRate}
                      ranking={leetCodeStats.ranking}
                      profileLink="https://leetcode.com/vinaypatel_nitmz/"
                    />
                  ) : (
                    <p className="text-red-500 font-medium">
                      Failed to load data. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </div>

          {/* GeeksforGeeks Card */}
          <div className="lg:w-1/2 flex justify-center items-center p-5 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-300 dark:border-gray-700">
            <Link
              href="https://www.geeksforgeeks.org/user/nitianvinaypatel/"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <div className="flex flex-col gap-4">
                {/* Header Section */}
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src={gfg}
                      width={30}
                      height={30}
                      alt="gfg Logo"
                      className="rounded-full"
                    />
                    <h2 className="text-sm lg:text-md font-semibold text-gray-800 dark:text-gray-200">
                      GeeksforGeeks
                    </h2>
                  </div>
                  <h2 className="text-sm lg:text-md text-green-500">
                    🎖️ Institute Rank :{" "}
                    {gfgStats?.instituteRank ?? "Loading..."}
                  </h2>
                </div>

                {/* Main Content */}
                <div className="flex justify-center items-center text-gray-700 dark:text-gray-300">
                  {loading ? (
                    <Loader />
                  ) : gfgStats ? (
                    <GFG
                      totalSolved={gfgStats.totalProblemsSolved}
                      basicSolved={gfgStats.basic}
                      easySolved={gfgStats.easy}
                      mediumSolved={gfgStats.medium}
                      hardSolved={gfgStats.hard}
                      rank={gfgStats.instituteRank}
                      profileLink="https://leetcode.com/vinaypatel_nitmz/"
                    />
                  ) : (
                    <p className="text-red-500 font-medium">
                      Failed to load data. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
