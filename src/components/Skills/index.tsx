import { useState, useEffect } from 'react'
import { SkillsProps } from './Skills.types'

const Skills = (props: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { skills } = props

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1001)
  }, [])
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}

export default Skills
