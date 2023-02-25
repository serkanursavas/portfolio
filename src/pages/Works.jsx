import ProjectItem from '../components/ProjectItem'

import projects from '../store/projects'

const Works = () => {
  return (
    <>
      <div className="mt-8 text-white">
        <p className="font-medium text-[36px]">
          <span className="text-primary">/</span>projects
        </p>
        <p className="mt-1 font-light">List of my projects</p>
      </div>

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
