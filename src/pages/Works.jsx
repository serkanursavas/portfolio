import ProjectItem from '../components/ProjectItem'

import projects from '../store/projects'
import PageTitle from '../components/PageTitle'

const Works = () => {
  return (
    <>
      <PageTitle
        title="projects"
        subtitle="List of my projects"
      />

      <div className="mt-16 text-white">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>complete-apps
        </h2>
        <div className="mt-10 space-y-6">
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
    </>
  )
}

export default Works
