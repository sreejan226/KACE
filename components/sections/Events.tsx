"use client";

import EventCard from "@/components/animata/card/ShinyCard";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

export default function EventsSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-r from-[#2b2d34] via-[#1a1a1f] to-[#0a0a0c]">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-8 sm:mb-12">
        Event Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
        {/* Date */}
        <EventCard
          icon={<Calendar size={36} className="sm:w-10 sm:h-10" />}
          title="Date"
          description="November 8–9, 2025"
          className="h-full"
        />

        {/* Venue */}
        <EventCard
          icon={<MapPin size={36} className="sm:w-10 sm:h-10" />}
          title="Venue"
          description="Civil Building, Room no. 110"
          className="h-full"
        />

        {/* Capacity */}
        <EventCard
          icon={<Users size={36} className="sm:w-10 sm:h-10" />}
          title="Capacity"
          description="50 (first years only)"
          className="h-full"
        />

        {/* Awards (centered on larger screens) */}
        <div className="sm:col-span-2 lg:col-span-1 lg:col-start-2">
          <EventCard
            icon={<Trophy size={36} className="sm:w-10 sm:h-10" />}
            title="Awards"
            description={[
              "Best Delegate - 1",
              "High Commendation - 1",
              "Special Mention - 1",
              "Verbal / Honorable Mention - 5",
            ]}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}
