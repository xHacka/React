import './Home.scss';
import useFetchQuote from '../../hooks/useFetchQuote'

export const Home = () => {
    const { data, loading, error } = useFetchQuote()

    return (
        <main className="home">
            <div className="home-hero">
                <img src="/images/cinema-still-life.jpg" alt="cinema-still-life" />
                {/* https://www.freepik.com/free-photo/cinema-still-life_3564441.htm#fromView=search&page=1&position=0&uuid=c4b5d66f-0886-4d2a-bef6-1577a1df7db3 */}
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
