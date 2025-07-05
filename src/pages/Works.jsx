import ProjectItem from '../components/ProjectItem'
import PageTitle from '../components/PageTitle'
import AnimatedPage from '../components/UI/AnimatedPage'

// import projects from '../store/projects'

import { useContext, useEffect } from 'react'
import { ProjectsContext } from '../store/projects-context'
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner'

const Works = () => {
  const { projects } = useContext(ProjectsContext)

  useEffect(() => {
    document.title = 'Projects'
    console.log('test')
  }, [])

  const activeProjects = projects
  return (
    <AnimatedPage>
      <PageTitle
        title="projects"
        subtitle="List of my projects"
      />

      {projects.length === 0 && <LoadingSpinner height="h-[638px]" />}
      {projects.length > 0 && (
        <div className="mt-16 text-white mb-16">
          <h2 className="text-2xl">
            <span className="text-primary">#</span>complete-apps
          </h2>
          <section className="mt-10 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-10 lg:hidden">
            {activeProjects.map(project => (
              <ProjectItem
                key={project._id}
                title={project.title}
                thumbnail={project.img}
                description={project.desc}
                tools={project.tools}
                link={project.link}
                status={project.status}
              />
            ))}
          </section>
          <section className="hidden mt-10 space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-10 ">
            {projects.map(project => (
              <ProjectItem
                key={project._id}
                title={project.title}
                thumbnail={project.img}
                description={project.desc}
                tools={project.tools}
                link={project.link}
                status={project.status}
              />
            ))}
          </section>
        </div>
      )}
    </AnimatedPage>
  )
}

export default Works
