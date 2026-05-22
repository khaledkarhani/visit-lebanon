


const quotes = [
  {
    text: 'Lebanon completely surprised me. The history, the food, the people — I have never felt so welcome anywhere.',
    author: 'Sarah M., United Kingdom',
  },
  {
    text: 'Skiing in the morning and swimming in the sea by afternoon. Where else on Earth can you do that?',
    author: 'David L., Canada',
  },
  {
    text: 'The food alone is worth the trip. Every meal felt like a celebration with family.',
    author: 'Aisha K., UAE',
  },
];

function Testimonials() {
  return (
    <section className="bg-dark-cedar py-5">
      <div className="container text-center">

        <span className="section-tag light">Visitor Stories</span>
        <h2 className="section-heading text-white mb-5">What Travelers Say</h2>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {quotes.map((quote, index) => (
             
              <div
                className={index === 0 ? 'carousel-item active' : 'carousel-item'}
                key={index}
              >
                <i className="bi bi-quote text-gold" style={{ fontSize: '3rem' }}></i>
                <p className="testimonial-quote">{quote.text}</p>
                <p className="testimonial-author">{quote.author}</p>
              </div>
            ))}

          </div>

          {/* Indicator dots */}
          <div className="carousel-indicators">
            {quotes.map((quote, index) => (
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                key={index}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;