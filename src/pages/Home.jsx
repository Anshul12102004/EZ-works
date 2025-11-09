export const Home = () => {
    return ( 
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-image">
                     <img src="/images/logo.png" alt="logo image" className="banner-image" />
                </div>
                <div className="hero-content">
                    <div className="hero-heading-xl">
                        <h1 className="heading-xl">
                            Varnan is where stories find 
                        </h1>

                          <h1 className="heading-xl">
                            their voice and form
                        </h1>
                        
                    </div>

                    <div className="hero-heading-l">
                        <h2 className="heading-l">
                            Films . Brands . Art
                        </h2>
                    </div>

                    <p className="paragraph">
                        Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
V doesn’t just tell stories - V honors them.
                    </p>
                </div>
            </div>
        </main>
    )
};