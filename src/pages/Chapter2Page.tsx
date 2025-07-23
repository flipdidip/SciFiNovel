import "./Chapter.css";
import chapter2ImageExpedition from "/chapter-2-expedition.png";

const Chapter2Page = () => {
  return (
    <div className="chapter-page">
      <div className="chapter-header">
        <h1>Under the Water</h1>
        <h2>Chapter 2, Nara Elwin</h2>
        <div className="chapter-meta">
          <span className="chapter-date">Started: July 22, 2025</span>
        </div>
      </div>

      <div className="chapter-content">
        <div className="chapter-text">
          <p>
            Nara Elwin accompanied the expedition team as they exited the safety
            of the underwater dome, her senses alert to every detail. They
            boarded a sleek submersible, its lights cutting through the blue
            gloom as it glided silently over the ocean floor. Through the
            reinforced glass, Nara watched vibrant kelp forests sway with the
            currents and schools of bioluminescent fish weaving through newly
            formed coral reefs—evidence of life reclaiming its place beneath the
            waves. After disembarking, the team swam through the underwater
            landscape, and Nara couldn't help but think about the media feeds
            she'd been following of the Endeavour's departure from Earth. Her
            heart swelled with excitement for humanity's first interstellar
            journey, even as a pang of sadness reminded her that she would never
            be part of such an adventure herself. Part of her wished they could
            have postponed today's exploration to watch the historic
            launch—after all, the ocean would still be here tomorrow, but this
            moment would never come again. Through her underwater comm device,
            she could still hear the USA faction's official broadcast echoing in
            her earpiece: "The Endeavour has successfully disengaged from
            orbital station docking clamps and is beginning its drift away from
            Earth's gravitational embrace. Four hundred souls aboard humanity's
            first interstellar vessel, powered by the powerful Sen-Prometheus
            drive, are now embarking on a fifty-year journey to the TRAPPIST-1
            system." The commentator's voice carried a mixture of triumph and
            solemnity that made Nara's chest tighten with emotion. "While other
            factions continue to wage war over Earth's remaining resources, the
            United States has achieved what many thought impossible—humanity's
            first successful interstellar mission. This historic launch
            demonstrates why the USA faction emerged as the strongest and most
            technologically advanced of all Earth's surviving powers." Even here
            in the depths, surrounded by the beauty of Earth's recovering
            oceans, she couldn't escape the magnitude of what was happening
            above.
          </p>

          <p>
            "Are you listening to this propaganda too?" came a familiar voice
            through her private comm channel. It was Kael, her childhood friend
            and fellow marine biologist, swimming about fifty meters away near a
            cluster of restored coral formations. "The way they're talking about
            it, you'd think they just performed a miracle instead of launching a
            ship powered by endless nuclear explosions." Nara switched to their
            private frequency, grateful for someone who shared her perspective.
            "I know," she whispered back, watching a school of luminescent fish
            dance around her. "All this euphemistic language about
            'revolutionary drives' and 'technological achievement'—they never
            mention the price. The millions who died in their wars, the
            ecosystems they poisoned, and now they're going to contaminate space
            itself with radioactive debris from their detonation drive." Kael's
            voice carried the same disgust she felt. "It's disgusting how they
            paint themselves as humanity's saviors when they're the ones who
            helped destroy this planet in the first place." "Elwin, Thorsen,
            focus on the mission," came the stern voice of Dr. Marina Voss,
            their expedition leader, cutting through their private channel.
            "We're here to document the reef regeneration, not to provide
            political commentary. Please maintain safe distance from the coral
            formations—we can't afford to damage what nature is working so hard
            to rebuild." There was a brief pause before her voice softened
            slightly, and she couldn't resist adding, "Though I suppose it's
            ironic that we're celebrating the restoration of life down here
            while they're launching civilization's most destructive technology
            into the cosmos. At least when their radioactive exhaust eventually
            reaches TRAPPIST-1, there won't be any pristine ecosystems left for
            them to contaminate." Despite her attempt at professional
            neutrality, the bitterness in Dr. Voss's voice was unmistakable.
          </p>

          <div className="chapter-illustration">
            <figure className="chapter-image">
              <img
                src={chapter2ImageExpedition}
                alt="Nara Elwin exploring the underwater life of Earth"
                className="chapter-image-integration"
              />
              <figcaption>
                Nara Elwin exploring the underwater life of Earth.
              </figcaption>
            </figure>
          </div>

          <p>
            As they continued their mission, swimming carefully between the
            delicate coral formations, Nara's thoughts drifted to the broader
            picture. The absence of most humans was, in truth, the only blessing
            that had emerged from the great collapse. Nature could finally start
            to regenerate without the constant pressure of human exploitation.
            The areas around the domes on what remained of dry land were heavily
            fished and strip-mined by the desperate surface factions, but here,
            in the depths of the Norwegian fjords, her faction had found
            sanctuary. The Engels-Cooperation had chosen to build their
            underwater dome in the flooded fjords of Norway—what had seemed like
            a harsh location to others, but which offered everything they
            needed: geological stability, natural protection from ocean
            currents, clean geothermal energy potential, and most importantly,
            safety from tsunamis and the extreme conditions of polar regions.
            The fjords had already been partially flooded from rising sea
            levels, making the transition to underwater living almost natural.
            It was a pacifist socialist faction where everyone was welcome who
            valued freedom, equality, and peace. A true faction of pure
            goodness, as Nara often thought with genuine pride. When the most
            aggressive factions concentrated on fighting over the remaining land
            masses, the Engels-Coop had concentrated on building their
            underwater sanctuary. What had initially appeared to be the worst
            location had become their greatest advantage—they were left in
            peace. While others waged war above, they built something beautiful
            below, creating a community where cooperation flourished and the old
            destructive patterns of human civilization could finally be
            abandoned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chapter2Page;
