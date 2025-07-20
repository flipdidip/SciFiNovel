import "./Chapter1Page.css";
import chapter1Image from "/chapter1-earth-from-orbit.png";

const Chapter1Page = () => {
  return (
    <div className="chapter-page">
      <div className="chapter-header">
        <h1>Chapter 1: Farewell to the Blue Planet</h1>
        <div className="chapter-meta">
          <span className="chapter-date">Published: July 20, 2025</span>
          <span className="reading-time">~12 min read</span>
        </div>
      </div>

      <div className="chapter-content">
        <div className="chapter-text">
          <p>
            Alaric Sen pressed his palm against the observation deck's
            reinforced glass, watching Earth rotate slowly beneath the orbital
            station. The planet had never looked more beautiful, or more broken.
            The blues were deeper now—oceans swollen from centuries of melting
            ice, continents reshaped by rising seas. What had once been green
            was mostly brown, punctuated by the silver gleam of dome cities
            where the survivors clustered.
          </p>

          <div className="chapter-illustration">
            <figure className="chapter-image">
              <img
                src={chapter1Image}
                alt="Earth viewed from orbital station showing blue oceans, brown continents, and dome cities gleaming in the sunlight"
                className="earth-from-orbit"
              />
              <figcaption>
                Earth as seen from the orbital departure station - the last view
                humanity's interstellar pioneers will have of their home world.
              </figcaption>
            </figure>
          </div>

          <p>
            "Final boarding call for TRAPPIST-1 expedition. All passengers
            report to Departure Bay Seven."
          </p>

          <p>
            The announcement echoed through the passenger control area, sterile
            and emotionless. Alaric didn't move. At thirty-something—though his
            actual age was a detail he'd stopped sharing decades ago—he'd
            learned that moments like these demanded their due reverence. This
            would be the last time human eyes would see Earth from this
            perspective for... well, that was the problem, wasn't it?
          </p>

          <p>
            The time dilation equations scrolled unbidden through his mind. At
            80% light speed, the forty-year journey to TRAPPIST-1 would feel
            like twenty-four years to those aboard the ship. But Earth? Earth
            would age the full forty years. The few million humans left down
            there would either adapt, evolve, or perish entirely while he slept
            in cryogenic suspension.
          </p>

          <p>
            If he ever came back—and that was a monumental if—he'd return to a
            world that had moved on without him, assuming it survived at all.
          </p>

          <p>
            He shouldered his single bag and walked toward the departure bay,
            his footsteps echoing in the nearly empty corridor. Most of the
            other passengers had already boarded—scientists, engineers,
            terraforming specialists, a few artists and philosophers. The last
            hope of human civilization, packaged in a ship powered by technology
            that would have seemed like magic to his great-grandparents.
          </p>

          <p>
            The Alcubierre-Chen drive—named partly after his own theoretical
            contributions, though he'd grown tired of explaining the mathematics
            to journalists. Space-time compression, exotic matter manipulation,
            energy requirements that would power a small city. The technical
            details felt meaningless now. What mattered was the result: they
            could reach 80% of light speed, making interstellar travel finally,
            barely possible.
          </p>

          <p>
            "Dr. Sen?" A young technician with nervous eyes approached him at
            the boarding gate. "We're ready for your final pre-departure check."
          </p>

          <p>
            Alaric nodded and followed her through the airlock into the ship's
            belly. The Endeavor stretched nearly two kilometers from bow to
            stern, most of it engine and fuel reserves. The passenger
            compartment felt almost cozy by comparison—just four hundred
            cryo-pods arranged in neat rows, each one a technological marvel
            that could keep a human body stable for decades.
          </p>

          <p>
            He knew exactly how it worked: controlled cellular dehydration,
            metabolic suppression, neural activity reduced to barely detectable
            levels. The human body as close to death as possible while still
            remaining alive. Another triumph of engineering that had become
            mundane through understanding.
          </p>

          <p>
            "Pod 127," the technician said, gesturing to a unit near the
            observation windows. "You'll have a view of TRAPPIST-1 when we
            arrive."
          </p>

          <p>
            "Assuming the windows aren't completely fogged by cosmic dust after
            twenty-four years," Alaric replied, but he was smiling. He
            appreciated the gesture.
          </p>

          <p>
            As he settled into the cryo-pod's cushioned interior, Alaric took
            one last look through the ship's porthole. Earth hung there, blue
            and wounded and stubborn. The planet that had given birth to
            consciousness, to art, to the very technology that was now carrying
            its children to the stars.
          </p>

          <p>
            Why was he going alone? The question would follow him into
            cryo-sleep, along with all the others he'd stopped trying to answer.
            Some journeys, he'd learned, were meant to be taken in solitude.
          </p>

          <p>
            The pod's lid descended with a soft hiss, and Alaric closed his eyes
            as the first wave of sedatives entered his bloodstream. Somewhere in
            the growing darkness, he thought he could still see Earth
            turning—blue and beautiful and impossibly far away.
          </p>
        </div>

        <div className="chapter-footer">
          <div className="chapter-notes">
            <h3>Author's Notes</h3>
            <p>
              This opening chapter establishes our protagonist Alaric Sen and
              the melancholic premise of humanity's exodus from a
              climate-ravaged Earth. I wanted to capture both the technological
              achievement of interstellar travel and the profound sadness of
              leaving one's home world, possibly forever. The TRAPPIST-1 system
              offers real scientific hope for finding habitable worlds, making
              it a perfect destination for this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter1Page;
