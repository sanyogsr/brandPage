const HeroSection = () =>{
    return (
        <main className="hero">

            <div className="hero-content">
                <h1>
                    Lorem ipsum dolor sit amet.
                </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui odio voluptas ullam, reiciendis quia quo, optio eligendi saepe commodi ut amet, quisquam quaerat fuga!
                  </p>
                  <div className="hero-btn">
                    <button>Shop now</button>
                    <button className="secondary-btn">Category</button>
                   
                  </div>
                  <div className="shopping">
                      <p>Also Available on</p>

                       <div className="brand-img">
                       
                       <img src="/images/amazon.png" alt="amazon image" />
                       <img src="/images/flipkart.png" alt="flipkart image" />
                  </div>
                  </div>

            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="hero Image" />
            </div>

        </main>
    )
}


export default HeroSection;