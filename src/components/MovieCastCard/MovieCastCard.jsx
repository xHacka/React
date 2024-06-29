import './MovieCastCard.scss'

const MovieCastCard = ({ person }) => {
    const profilePictureErrorHandler = (e) => {
        e.target.src = '/images/unknown.png';  
        e.target.onerror = null; 
    };
    return <div className='movie-details--person-container'>
        <div>
            <img
                className="movie-details--profile-image"
                src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                onError={profilePictureErrorHandler}
                alt={`${person.name} profile`}
            />
        </div>
        <div className="movie-details--details">
            <h2>{person.name}</h2>
            <p><strong>Character:</strong> {person.character}</p>
            <p><strong>Department:</strong> {person.known_for_department}</p>
            <p><strong>Gender:</strong> {person.gender === 1 ? 'Female' : 'Male'}</p>
            <p><strong>Popularity:</strong> {person.popularity}</p>
        </div>
    </div>
}

export const MovieCast = ({ cast }) => {
    return (
        <div className="movie-details--crew-container">
            {cast.map(person =>
                <MovieCastCard person={person} key={person.id}/>
            )}
        </div>

    )
}
