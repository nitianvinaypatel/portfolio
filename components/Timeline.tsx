import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CardSpotlightDemo } from "@/components/Cardspotlight";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <CardSpotlightDemo />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <CardSpotlightDemo />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
