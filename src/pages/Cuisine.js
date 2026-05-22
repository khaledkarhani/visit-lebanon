
import hummus from '../assets/hummus.jpeg';
import kebbeh from '../assets/kebbeh.jpeg';
import manakish from '../assets/manakish.jpeg';
import fattoush from '../assets/fattoush.jpeg';
import baklava from '../assets/baklava.jpeg';
import mezza from '../assets/mezza.jpeg';


const dishes = [
  { img: hummus,   name: 'Hummus',    desc: 'A creamy blend of chickpeas, tahini, lemon, and garlic — Lebanon\'s most famous dip.' },
  { img: kebbeh,   name: 'Kibbeh',    desc: 'The national dish — bulgur wheat and minced lamb, fried or baked to perfection.' },
  { img: manakish, name: 'Manakish',  desc: 'A beloved breakfast flatbread topped with za\'atar, cheese, or ground meat.' },
  { img: fattoush, name: 'Fattoush',  desc: 'A crispy bread salad with fresh vegetables, sumac dressing, and toasted pita.' },
  { img: baklava,  name: 'Baklava',   desc: 'Flaky phyllo pastry layered with pistachios, drenched in fragrant sugar syrup.' },
];


const mezzeItems = [
  { id: 'acc1', title: '🫒 What is Mezze?', body: 'Mezze is a selection of small dishes served as appetizers or a full meal — hummus, baba ghanoush, olives, salads, and much more, sometimes 30+ dishes on one table!' },
  { id: 'acc2', title: '🍷 Lebanese Wine',  body: 'Lebanon has one of the oldest wine traditions in the world. The Bekaa Valley is home to wineries like Château Ksara and Château Musar.' },
  { id: 'acc3', title: '☕ Coffee & Arak',  body: 'Meals end with strong cardamom-spiced coffee. Arak, an anise-flavored spirit mixed with water and ice, is the national drink.' },
  { id: 'acc4', title: '🍬 Lebanese Sweets', body: 'Baklava, maamoul, knafeh, and halawet el-jibn are just a few of the sweets that have conquered taste buds worldwide.' },
];

function Cuisine() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner" style={{ backgroundImage: `url(${mezza})` }}>
        <div className="page-banner-overlay">
          <div className="container text-center text-white">
            <h1 className="page-banner-title">Lebanese Cuisine</h1>
            <p className="page-banner-sub">A feast for all the senses</p>
          </div>
        </div>
      </div>

      {/* FOOD CARDS */}
      <section className="py-5 bg-light-cream">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Must Try</span>
            <h2 className="section-heading">Iconic Lebanese Dishes</h2>
          </div>

          <div className="row g-4">
            {dishes.map((dish, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                <div className="food-card">
                  <img src={dish.img} alt={dish.name} className="food-img" />
                  <div className="food-overlay">
                    <h5>{dish.name}</h5>
                    <p>{dish.desc}</p>
                  </div>
                  <div className="food-label">{dish.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEZZE ACCORDION */}
      <section className="section-intro">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Accordion column */}
            <div className="col-lg-6">
              <span className="section-tag">Dining Culture</span>
              <h2 className="section-heading">The Mezze Tradition</h2>
              <p className="section-text">In Lebanon, meals are more than food — they are a social ritual.</p>

              <div className="accordion" id="mezzeAccordion">
                {mezzeItems.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className={index === 0 ? 'accordion-button' : 'accordion-button collapsed'}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={index === 0 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}
                      data-bs-parent="#mezzeAccordion"
                    >
                      <div className="accordion-body">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image column */}
            <div className="col-lg-6">
              <img src={mezza} alt="Lebanese mezze table" className="img-fluid rounded-3 shadow-lg" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Cuisine;