import { useState } from 'react'
import './MovieCrewCard.scss'

const MovieCrewCard = ({ person }) => {
    const profilePictureErrorHandler = (e) => {
        e.target.src = '/images/unknown.png';  
        e.target.onerror = null;
        // https://www.flaticon.com/free-icon/unknown_3113095?term=unknown&page=1&position=19&origin=search&related_id=3113095
    }
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
            <p><strong>Job:</strong> {person.job}</p>
            <p><strong>Department:</strong> {person.known_for_department}</p>
            <p><strong>Gender:</strong> {person.gender === 1 ? 'Female' : 'Male'}</p>
            <p><strong>Popularity:</strong> {person.popularity}</p>
        </div>
    </div>
}

export const MovieCrew = ({ crew }) => {
    return (
        <div className="movie-details--crew-container">
            {crew.map(person =>
                <MovieCrewCard person={person} key={person.credit_id}/>
            )}
        </div>

    )
}
