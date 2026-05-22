


const reasons = [
  {
    icon: 'bi-clock-history',
    title: '6,000 Years of History',
    text: 'Walk through some of the oldest continuously inhabited cities on Earth.',
  },
  {
    icon: 'bi-egg-fried',
    title: 'World-Class Food',
    text: 'Lebanese cuisine is celebrated globally — fresh, generous, and unforgettable.',
  },
  {
    icon: 'bi-tree',
    title: 'Mountains & Sea',
    text: 'Ski in the morning and swim in the Mediterranean the same afternoon.',
  },
  {
    icon: 'bi-emoji-smile',
    title: 'Warm Hospitality',
    text: 'Lebanese warmth and generosity will make you feel at home instantly.',
  },
];

function WhyLebanon() {
  return (
    <section className="section-intro bg-light-cream">
      <div className="container">

        {/* Section heading */}
        <div className="text-center mb-5">
          <span className="section-tag">Why Visit</span>
          <h2 className="section-heading">Why You'll Love Lebanon</h2>
        </div>

        {/* Step 2: loop over the array with .map() to create one box per item */}
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="why-box text-center h-100">
                <div className="why-icon">
                  <i className={`bi ${reason.icon}`}></i>
                </div>
                <h5>{reason.title}</h5>
                <p className="section-text">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyLebanon;