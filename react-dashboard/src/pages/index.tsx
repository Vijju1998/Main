import Dashboard from './dashboard/settings/Dashboard'
import Login from '@component/component/login/Login'
import { useSession } from 'next-auth/react'
import scss from "../styles/Home.module.scss"
const Home: React.FunctionComponent = function () {
  const { data: session } = useSession()
  return (
    <>
      <main className={scss.main}>
        
        {
          session && (
            <>
              
              <Dashboard />
            </>
          )
        }
        <Login />
      </main>
    </>
  )
}
export default Home;