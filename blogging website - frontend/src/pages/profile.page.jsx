import { useParams } from "react-router-dom";

const ProfilePage = () => {

    let { id: profileId } = useParams();

    return (
        <h1>Profile page - {profileId} </h1>
    )
}

export default ProfilePage;