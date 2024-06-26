import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/userCard";
import './index.css'
const Users = () =>{
    const {users,loading,error} = useGetUsers();
    console.log('users...',users);

    return(
        <div className="user-image">
            {loading && <h2>Loading users...</h2>}
            {users.length >0 && !loading ?
            users.map((user)=>(
            <UserCard
            image = {user.image}
            fullname={`${user.firstName} ${user.lastName}`}
            key ={user.id}
          />
        ))
    :!loading && <h2>No users found</h2>}
{error.length>0 && <h2>Error: {error}</h2>}
</div>
    );
};
export default Users;