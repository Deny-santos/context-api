import { useAuth } from '../provider/auth'
//o legal é não ter nem a mudnça de estado aqui nesse componente


const Profile = () => {
    
  const { user } = useAuth()
  return (
    <div>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Profile