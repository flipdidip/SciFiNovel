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
            of the underwater dome, her senses alert to every detail. Their
            mission was to document how Earth's nature was already reemerging in
            the oceans. Around them, vibrant kelp forests swayed with the
            currents, and schools of bioluminescent fish wove through newly
            formed coral reefs, evidence of life reclaiming its place beneath
            the waves. As they swam through the underwater landscape, Nara
            couldn't help but think about the media feeds she'd been following
            of the Endeavour's departure from Earth. Her heart swelled with
            excitement for humanity's first interstellar journey, even as a pang
            of sadness reminded her that she would never be part of such an
            adventure herself. Part of her wished they could have postponed
            today's exploration to watch the historic launch—after all, the
            ocean would still be here tomorrow, but this moment would never come
            again.
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
            The absence of most humans was, in truth, the only blessing that had
            emerged from the great collapse. Nature could finally start to
            regenerate without the constant pressure of human exploitation. The
            areas around the domes on what remained of dry land were heavily
            fished and strip-mined by the desperate surface factions, but here,
            in the depths, her faction had found sanctuary. The
            Engels-Cooperation had chosen to build their underwater dome in what
            had seemed like the worst possible location—deep beneath the waves
            where most others wouldn't venture.
          </p>

          <p>
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
