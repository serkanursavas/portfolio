import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ProjectsContextProvider from './store/projects-context'
import SkillsContextProvider from './store/skills-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ProjectsContextProvider>
      <SkillsContextProvider>
        <App />
      </SkillsContextProvider>
    </ProjectsContextProvider>
  </>
)
