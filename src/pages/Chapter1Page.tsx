import "./Chapter.css";
import chapter1ImageEarth from "/chapter1-earth-from-orbit.png";
import chapter1ImageShip from "/chapter1-ship-from-station.png";

const Chapter1Page = () => {
  return (
    <div className="chapter-page">
      <div className="chapter-header">
        <h1>Farewell to the Blue Planet</h1>
        <h2>Chapter 1, Alaric Sen</h2>
        <div className="chapter-meta">
          <span className="chapter-date">Published: July 21, 2025</span>
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
                src={chapter1ImageEarth}
                alt="Earth viewed from orbital station showing blue oceans, brown continents, and dome cities gleaming in the sunlight"
                className="chapter-image-integration"
              />
              <figcaption>
                Earth as seen from the orbital departure station - the last view
                humanity's interstellar pioneers will have of their home world.
              </figcaption>
            </figure>
          </div>

          <p>
            "Final boarding call for TRAPPIST-1 expedition. All passengers
            report to Departure Bay Seven." The announcement echoed through the
            passenger control area, sterile and emotionless. Alaric didn't move.
            His reflection in the window showed a man who could pass for
            somewhere between thirty and forty, though the years behind those
            eyes told a different story entirely—one he'd long since stopped
            trying to explain. He'd learned that moments like these demanded
            their due reverence. This would be the last time human eyes would
            see Earth from this perspective for... well, that was the problem,
            wasn't it?
          </p>

          <p>
            The time dilation equations scrolled unbidden through his mind. At
            higher degrees of light speed, the fifty-year journey to TRAPPIST-1
            would feel like twenty-seven years to those aboard the ship. But
            Earth? Earth would age the full fifty years, most people he knew
            will be dead by then. The few hundred million humans left down there
            had retreated into dome cities, the last refuges against a world
            made hostile by global warming. Most of the population had
            perished—victims of famine, disease, or the endless wars fought for
            the shrinking high ground. These conflicts were not just between
            nations, but also between corporations, super-rich dynasties with
            private armies, religious factions, and other desperate powers.
            Alaric found the specifics tedious now, the endless shifting
            alliances and betrayals, but he couldn't help feeling a deep sadness
            at how unglorious humanity's final chapters on Earth had become.
          </p>

          <p>
            He shouldered his single bag and walked toward the departure bay,
            his footsteps echoing in the nearly empty corridor. Most of the
            other passengers had already boarded—scientists, engineers,
            terraforming specialists, a few artists and philosophers. The last
            hope of human civilization, packaged in a ship powered by technology
            that would have seemed like magic to his great-grandparents.
            Alaric's gaze lingered on a few of them as he passed: the botanist
            with ink stains on her cuffs, likely still annotating gene maps
            until the last possible moment; the engineer whose nervous habit of
            tapping his badge betrayed a background in high-pressure reactor
            maintenance; a sculptor, hands calloused and eyes distant, perhaps
            already imagining new forms for alien landscapes. There were no
            children—strict regulations forbade anyone under eighteen from
            joining the expedition, a rule meant to minimize risk and ensure
            only those deemed essential would make the journey. The absence of
            young faces lent the group a somber, resolute air; each person
            carried not just their expertise, but also the unspoken weight of
            futures they would never see, and generations that would have to be
            born far from Earth. He found himself cataloguing their skills and
            quirks with the detached precision of someone who had seen too many
            lifetimes—each detail a thread that could unravel into a story,
            fascinating but ultimately irrelevant to the mission ahead. He
            wondered, briefly, what secrets and regrets each of them carried,
            and whether any of it would matter on a world over forty light-years
            from home.
          </p>

          <p>
            The Sen-Prometheus drive—named partly after his own theoretical
            contributions, though he'd grown tired of explaining the mechanics
            to anyone who asked. It was those contributions, and his scientific
            expertise, that secured his place on board. The USA faction had been
            the strongest, the largest, and—unsurprisingly—the first to launch
            an interstellar ship. That was why he joined them decades ago, why
            everyone with his skill set betted on them and joined. He understood
            the elegant brutality of the drive: the massive shock absorbers, the
            reinforced pusher plate at the stern that could withstand... well,
            what it needed to withstand, the precise timing of fuel pellet
            deployment. The only fuel source the USA faction was having more
            than enough, a never ending series of nuclear explosions. The
            technical details felt meaningless now. What mattered was the
            result: they could reach 80% of light speed, making interstellar
            travel finally, barely possible.
          </p>

          <p>
            "Dr. Sen?" A young technician with nervous eyes approached him at
            the boarding gate. "We're ready for your final pre-departure check."
            Alaric studied her for a moment—the way she held her shoulders too
            rigid, the slight tremor in her voice that spoke of either
            inexperience or carefully controlled fear. Her badge showed standard
            clearance levels, nothing unusual, and read "Z. Nyota" in crisp
            lettering. Zemirah, he noted, glancing at the full name beneath—a
            beautiful name that meant "song" in Hebrew, if he remembered
            correctly. But her eyes kept darting to the security checkpoint
            behind him. Fresh out of training, he decided, probably assigned to
            this detail because everyone else with seniority had found excuses
            to be elsewhere during humanity's last exodus. No threat, just
            another young person trying to do their job while the world ended
            around them.
          </p>

          <p>
            Alaric nodded and followed Zemirah through the airlock into the
            ship’s interior. The Endeavor, for all its scale, was a vessel of
            necessity rather than comfort—two kilometers long, yet most of that
            length was devoted to engines, fuel, and shielding. The habitable
            section was modest: four hundred cryo-pods arranged in precise rows,
            each one a technological marvel that could keep a normal human body
            stable for decades. Also knowing exactly how it worked: controlled
            cellular dehydration, metabolic suppression, neural activity reduced
            to barely detectable levels. The human body as close to death as
            possible while still remaining alive. Another triumph of engineering
            that had become mundane through understanding. Four hundred
            souls—just enough to seed a colony, not enough to recreate the world
            they were leaving behind. The rest would come to life later, in the
            form of embryos stored in cryogenic vaults, the true hope for a
            future civilization. These first travelers were caretakers,
            teachers, and builders, entrusted with nurturing the next generation
            on a world none of them had ever seen. It was a compromise born of
            harsh mathematics and harsher realities, but it was the only path
            left. Humanity’s survival, Alaric reflected, had always depended on
            making do with what was possible, rather than what was ideal. But
            for him that was a great opportunity to not make the same mistakes
            again. This time he would not be so cautious.
          </p>

          <div className="chapter-illustration">
            <figure className="chapter-image">
              <img
                src={chapter1ImageShip}
                alt="Ship viewed from orbital station showing the Endeavor's sleek design and massive engines and its huge shield at the end"
                className="chapter-image-integration"
              />
              <figcaption>
                The Endeavor, humanity's first interstellar ship, ready for its
                maiden voyage to TRAPPIST-1.
              </figcaption>
            </figure>
          </div>

          <p>
            "Pod 127, You'll have a view of TRAPPIST-1 when we arrive." she
            said, gesturing to a unit near the observation windows. "Assuming
            the windows aren't completely fogged by cosmic dust after
            twenty-four years," Alaric replied, but he was smiling. He
            appreciated the gesture. As he settled into the cryo-pod's cushioned
            interior, Alaric took one last look through the ship's porthole.
            Earth hung there, blue and wounded and stubborn. The planet that had
            given birth to consciousness, to art, to the very technology that
            was now carrying its children to the stars. His home for a time that
            felt like an eternity, a place which had nurtured him, challenged
            him, and ultimately disappointed his expectations. Now finally he
            could leave and reach out for new adventures, boldly go where he had
            never gone before. He glanced around the cryo-bay and saw that most
            of the other pods were already occupied, their transparent lids
            misted with condensation. The faces inside were lost in thought—some
            with eyes closed, others staring upward, expressions caught between
            hope and sorrow. A few were quietly weeping, tears tracing lines
            down their cheeks, mourning the world they were leaving behind even
            as they clung to the promise of a new beginning. There was a sense
            of relief in the air, but also a deep, aching sadness; everyone
            seemed to carry both the weight of loss and the fragile hope of
            starting over among the stars.
          </p>

          <p>
            This was just the beginning, he knew. The first of many expeditions
            that would scatter humanity across the galaxy like seeds on cosmic
            winds. More ships were nearly ready, their construction accelerated
            by the urgency of their mission. Many factions on earth assigned all
            their resources to the effort, not all of them peacefully
            coexisting. The technology would evolve, colonies would grow, and
            eventually— perhaps inevitably—those distant outposts would develop
            their own interests, their own cultures, their own ambitions. He
            could already imagine the bitter irony: survivors of Earth's
            near-extinction waging war against each other among the stars, like
            something out of a badly written science fiction novel. Human
            nature, it seemed, traveled at any speed. His mind drifted to the
            implications and he lost track of time. His philosophical musings
            were cut short by a deep rumble that vibrated through the ship's
            hull. "ATTENTION ALL PASSENGERS," blared the ship's AI in a voice
            that could wake the dead, "MANOUVERING ENGINES ARE NOW ONLINE.
            INITIATING ORBITAL DEPARTURE SEQUENCE. ALL PERSONNEL PREPARE FOR
            CRYOGENIC INITIALIZATION IN T-MINUS FIFTEEN MINUTES." The Endeavor
            shuddered as massive docking clamps released their grip on the
            orbital station, and Alaric felt the subtle shift as they began
            their slow drift away from Earth's gravitational embrace.
          </p>

          <p>
            TRAPPIST-1 beckoned from forty light-years away—seven worlds
            orbiting a red dwarf star, three of them potentially habitable,
            their surfaces possibly kissed by liquid water and temperate
            climates. The data suggested paradise, but data could lie. What if
            they weren't the first to discover those worlds? What if something
            already lived there—something ancient, intelligent, and vastly
            superior to humanity's fumbling attempts at interstellar travel? The
            probability was minuscule, statistically negligible, but it existed
            nonetheless. He had staked everything on this journey—his entire
            existence, all his accumulated years, all his carefully guarded
            secrets—on what amounted to the universe's longest shot. The
            question would follow him into cryo-sleep, along with all the others
            he'd stopped trying to answer. The pod's lid descended with a soft
            hiss, and Alaric closed his eyes as the first wave of sedatives
            entered his bloodstream. Somewhere in the growing darkness, he
            thought he could still see Earth turning—blue and beautiful and
            impossibly far away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chapter1Page;
