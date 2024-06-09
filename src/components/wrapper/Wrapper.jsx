import { Header, Footer } from ".."

export const Wrapper = ({ Component }) => {
    return (
        <>
            <Header />
            <Component />
            <Footer />
        </>
    )
}
