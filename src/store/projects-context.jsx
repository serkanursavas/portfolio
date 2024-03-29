import { createContext, useEffect, useState } from 'react'

export const ProjectsContext = createContext({
  projects: []
})

function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY
        }
      })
      const data = await response.json()

      setProjects(data.projects)
    }

    try {
      getProjects()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const value = {
    projects
  }

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
}

export default ProjectsContextProvider
