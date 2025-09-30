"use client";

import EventCard from "@/components/animata/card/ShinyCard";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

export default function EventsSection() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-[#2b2d34] via-[#1a1a1f] to-[#0a0a0c]">
      <h2 className="text-center text-3xl font-bold text-yellow-400 mb-12">
        Event Information
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
        <EventCard
          icon={<Calendar size={40} />}
          title="Date"
          description="November 1-2, 2025"
          className="h-full"
        />
        <EventCard
          icon={<MapPin size={40} />}
          title="Venue"
          description="College Auditorium & Conference Halls"
          className="h-full"
        />
        <EventCard
          icon={<Users size={40} />}
          title="Capacity"
          description="Open Registration"
          className="h-full"
        />
        <div className="md:col-start-2">
          <EventCard
            icon={<Trophy size={40} />}
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
