import { createContext, useEffect, useState } from 'react'

export const SkillsContext = createContext({
  skills: [],
  categories: []
})

function SkillsContextProvider({ children }) {
  const [skills, setSkills] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getSkills() {
      const res = await fetch('http://localhost:3000/api/skills', {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const { categories, skills } = await res.json()

      setCategories(categories)
      setSkills(skills)
    }

    getSkills()
  }, [])

  const value = {
    skills,
    categories
  }

  return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>
}

export default SkillsContextProvider
