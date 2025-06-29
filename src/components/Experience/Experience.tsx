"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "../UI/card";

interface Experience {
    company: string;
    role: string;
    period: string;
    location?: string;
    bullets: string[];
}

const experiences: Experience[] = [
    {
        company: "Neelgai",
        role: "Frontend Developer",
        period: "Sep 2024 – Present",
        location: "Remote",
        bullets: [
            "Developed and shipped a responsive web marketplace using Remix and a business portal using React, translating Figma designs into pixel-perfect UI.",
            "Built a real-time messaging system with Socket.IO, improving support response time and engagement.",
            "Implemented Zustand and React Query for state management, reducing API over-fetching by 35%.",
            "Integrated React Hook Form for dynamic form validation, reducing submission errors.",
            "Collaborated in Agile sprints, conducted code reviews, and maintained modular codebases."
        ]
    },
    {
        company: "Aroundly",
        role: "Fullstack Developer",
        period: "Mar 2024 – Sep 2024",
        location: "Remote",
        bullets: [
            "Built new features from scratch, improving platform functionality and UX.",
            "Created cron jobs for automated scraping and regular data refresh.",
            "Integrated Google Maps API to enhance mapping functionality.",
            "Developed the onboarding flow including DB design, registration API, and email verification.",
            "Implemented auth middlewares to ensure secure access and protect sensitive data."
        ]
    }
];


/**
 * ExperienceSection
 * -------------------------------------------------------------
 * A timeline‑style work‑experience section built with Tailwind CSS,
 * Framer Motion animations, shadcn/ui Card components, and Lucide icons.
 * Drop this into your Next.js page (or layout) and link it from nav via
 *    <a href="#experience">Experience</a>
 */
export default function ExperienceSection() {
    return (
        <section id="experience" className="scroll-mt-20 py-16">
            <div className="mx-auto  px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center gap-2 text-3xl font-bold text-primary-content"
                >
                    <Briefcase className="h-8 w-8" /> Experience
                </motion.h2>

                <ol className="relative border-s border-border">
                    {experiences.map((exp, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.4 }}
                            className="mb-8 ms-6 last:mb-0"
                        >
                            <span className="absolute -start-[10px] top-4 h-4 w-4 rounded-full border-2 border-primary bg-primary" />

                            <Card className="border-border w-full overflow-hidden rounded-2xl shadow-lg">
                                <CardHeader className="flex flex-col gap-1 bg-secondary/10 p-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-semibold t">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm text-secondary-content">{exp.company}</p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-2 text-sm text-primary-content/70 sm:mt-0">
                                        <MapPin className="h-4 w-4 shrink-0" />
                                        <span>{exp.location ?? ""}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="p-4">
                                    <p className="mb-2 text-sm font-medium text-primary-content/70">
                                        {exp.period}
                                    </p>
                                    <ul className="list-disc space-y-1 ps-5 text-primary-content/80">
                                        {exp.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
