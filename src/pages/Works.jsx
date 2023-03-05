import ProjectItem from '../components/ProjectItem'

import projects from '../store/projects'
import PageTitle from '../components/PageTitle'
import AnimatedPage from '../components/UI/AnimatedPage'

const Works = () => {
  const activeProjects = projects.slice(0, 2)

  return (
    <AnimatedPage>
      <PageTitle
        title="projects"
        subtitle="List of my projects"
      />

      <div className="mt-16 text-white mb-16">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>complete-apps
        </h2>
        <div className="mt-10 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-10 lg:hidden">
          {activeProjects.map(project => (
            <ProjectItem
              key={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              description={project.description}
              tools={project.tools}
              link={project.link}
              status={project.status}
            />
          ))}
        </div>
        <div className="hidden mt-10 space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-10 ">
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              description={project.description}
              tools={project.tools}
              link={project.link}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Works
