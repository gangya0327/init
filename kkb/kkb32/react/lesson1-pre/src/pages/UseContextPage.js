import React, { useContext } from 'react'
import { Context, UserContext } from '../Context'

export default function UseContextPage() {
  const theme = useContext(Context)
  const user = useContext(UserContext)
  return (
    <div>
      <h3 style={{ color: theme.themeColor }}>UseContextPage</h3>
      <p>{user.name}</p>
    </div>
  )
}
