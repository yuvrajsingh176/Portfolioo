import { skillList } from '@/appData'
import ExperienceSection from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import { getAllProjects } from '@/services'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ExperienceSection />
        <ProjectSection projects={projects} />
        <ServiceSection />

      </div>
    </main>
  )
}
