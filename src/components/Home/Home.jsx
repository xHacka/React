import './Home.scss';
import useFetchQuote from '../../hooks/useFetchQuote'

export const Home = () => {
    const { data, loading, error } = useFetchQuote()

    return (
        <main className="home">
            <div className="home-hero">
                <img src="/images/cinema-still-life.jpg" alt="cinema-still-life" />
            </div>
            <div className="home-quote">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && data.length > 0 ? (
                data.map((quote, index) => (
                    <div key={index}>
                        <p>{quote.quote}</p>
                        <p><strong>- {quote.author}</strong></p>
                    </div>
                ))
            ) : (
                <div>No movie quote found.</div>
            )}
            </div>
        </main>
    );
};
