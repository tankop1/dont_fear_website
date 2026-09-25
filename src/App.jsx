import punkFlyer from './assets/PunkFlyer.jpg'

const TICKER =
  "*** PUNK *** LIVE *** HALLOWEEN NIGHT *** w/ PUMP THE BAND *** FOOD BY THE HALLOWEEN REAPER *** BRING A FLASHLIGHT *** DO NOT BRING YOUR LITTLE BROTHER *** "

function Bat({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 44" aria-hidden="true">
      <path
        fill="currentColor"
        d="M60 18c-4-10-10-12-16-8 2 2 2 5-1 7-8-6-18-6-26 1 4 1 6 4 4 6-8-1-16 1-22 6 6 0 10 2 12 5-4 1-7 5-5 7 6-2 12-3 16-1-1 4 1 7 4 6 2-3 5-4 8-3 1-4 4-6 8-4 4-1 6 1 8 4 2-1 6 0 8 3 3 1 5-2 4-6 4-2 10-1 16 1 2-2-1-6-5-7 2-3 6-5 12-5-6-5-14-7-22-6-2-2 0-5 4-6-8-7-18-7-26-1-3-2-3-5-1-7-6-4-12-2-16 8z"
      />
    </svg>
  )
}

function App() {
  return (
    <div className="page">
      <div className="topbar">
        <span>welcome to the OFFICIAL party page!!! (this is the only one)</span>
        <span>last updated: 10/13/01 3:12 AM</span>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>{TICKER}</span>
          <span>{TICKER}</span>
        </div>
      </div>

      <h1>PUNK !! LIVE !! HALLOWEEN NIGHT !!</h1>
      <p className="invite">
        a party. <span>you&apos;re invited.</span> everyone is invited.
      </p>
      <p className="click-hint">&gt;&gt; click the flyer &lt;&lt;</p>

      <div className="stage">
        <aside className="info">
          <div className="info-box">
            <p>WHO: PUNK</p>
            <p>ALSO: Pump the Band</p>
            <p>FOOD: The Halloween Reaper</p>
            <p>WHEN: Halloween. Late.</p>
            <p>
              WHERE: you&apos;ll know it when you
              <br />
              see it
            </p>
            <p>COST: $5 or a good costume</p>
          </div>
          <Bat className="bat bat-left" />
          <p className="soon">
            DATE + LOCATION
            <br />
            COMING SOON_
          </p>
        </aside>

        <article className="flyer">
          <img
            src={punkFlyer}
            alt="Punk Halloween house show flyer. You're invited."
          />
        </article>

        <aside className="rules">
          <h2>PARTY RULES</h2>
          <ol>
            <li>costumes REQUIRED</li>
            <li>stay with your group</li>
            <li>no masks after midnight</li>
            <li>do NOT go past the fence</li>
            <li>
              if you hear the band stop playing,
              <br />
              keep dancing
            </li>
            <li>have fun!!!!</li>
          </ol>
        </aside>

        <Bat className="bat bat-mid" />
        <Bat className="bat bat-low" />
      </div>

      <p className="again">(if nothing happens, click it again)</p>
      <hr className="divider" />

      <p className="visitor">
        you are visitor # <span className="counter">000666</span>
      </p>

      <p className="nav">
        <a href="#guestbook">sign the guestbook</a>
        <span className="sep"> | </span>
        <a className="not-yet" href="#directions">
          directions (NOT YET)
        </a>
        <span className="sep"> | </span>
        <a href="#webmaster">email the webmaster</a>
      </p>
      <p className="nav ring-row">
        <a href="#prev">&lt;&lt; prev</a>
        <span className="sep"> | </span>
        <a className="ring" href="#webring">
          Tri-County Haunts Webring
        </a>
        <span className="sep"> | </span>
        <a href="#next">next &gt;&gt;</a>
      </p>

      <p className="netscape">
        Best viewed in Netscape Navigator 4.7 at 800x600. Turn your speakers up.
      </p>

      <footer>
        Copyright © 2001 PUNK ENTERPRISES, LLC (PENDING). ALL RIGHTS RESERVED,
        INCLUDING RIGHTS NOT YET INVENTED. PUNK™ IS A TRADEMARK OF PUNK. PUMP
        THE BAND® IS NOT AFFILIATED WITH THE HALLOWEEN REAPER CATERING CO. OR
        ITS SUBSIDIARIES. ATTENDANCE CONSTITUTES ACCEPTANCE OF ALL TERMS,
        SPOKEN AND UNSPOKEN. MANAGEMENT IS NOT RESPONSIBLE FOR LOST ITEMS, LOST
        PERSONS, OR LOST TIME. NO REENTRY. VOID WHERE PROHIBITED. ALSO VOID
        WHERE NOT PROHIBITED.
      </footer>
    </div>
  )
}

export default App
