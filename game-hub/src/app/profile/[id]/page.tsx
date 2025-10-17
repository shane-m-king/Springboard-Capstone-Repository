export default function UserProfile({params}: { params: { id: string } }) {
    return (
        <div>
            <h1>PROFILE</h1>
            <hr />
            <p>Profile Page for {params.id}</p>        
        </div>
    )
}