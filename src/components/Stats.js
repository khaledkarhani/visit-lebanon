// Stats.js — strip of stats that count up from 0 when the page loads


// useState  = lets a component "remember" a value between renders
// useEffect = lets us run code at a specific time (here: once, on load)
import { useState, useEffect } from 'react';

// A small reusable component for ONE counting number.
// It receives `target` (the final number) and `label` via props.
function Counter({ target, label }) {

  // useState gives us TWO things:
  //   count        -> the current value (starts at 0)
  //   setCount     -> the ONLY way to change it (never write count = ... directly)
  
  const [count, setCount] = useState(0);

  // useEffect runs AFTER the component appears on screen.
  // The empty array [] at the end means "run this only once, on first load."
  useEffect(() => {

    let current = 0;
    const steps = 100;                       // how many increments to reach target
    const increment = target / steps;       // how much to add each step

    // setInterval repeatedly runs code every X milliseconds
    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;                   // don't overshoot
        clearInterval(timer);               // stop the timer when done
      }

      setCount(Math.round(current));        // update state -> triggers re-render
    }, 65);                                 // every 65ms

    // Cleanup: if the component disappears, stop the timer (good practice)
    return () => clearInterval(timer);

  }, [target]);                             // re-run only if `target` changes

  return (
    <div className="col-6 col-md-3">
      <p className="stat-num">{count}+</p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

// The strip itself: four counters with different numbers.
function Stats() {
  return (
    <section className="stats-strip py-5">
      <div className="container">
        <div className="row text-center g-4">
          <Counter target={18} label="UNESCO Sites" />
          <Counter target={6000} label="Years of History" />
          <Counter target={4} label="Seasons to Visit" />
          <Counter target={225} label="km of Coastline" />
        </div>
      </div>
    </section>
  );
}

export default Stats;