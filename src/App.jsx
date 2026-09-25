import { useEffect, useRef } from 'react'
import punkFlyer from './assets/PunkFlyer.jpg'

const TICKER_PHRASE =
  "*** PUNK *** LIVE *** HALLOWEEN NIGHT *** w/ PUNK THE BAND *** FOOD BY THE HALLOWEEN REAPER *** BRING A FLASHLIGHT *** DO NOT BRING YOUR LITTLE BROTHER *** "
const TICKER_LINE = TICKER_PHRASE.repeat(4)

function Ticker() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const first = track?.querySelector('span')
    if (!track || !first) return

    const sync = () => {
      const width = first.offsetWidth
      track.style.setProperty('--loop-width', `${width}px`)
      track.style.animationDuration = `${width / 75}s`
    }

    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(first)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track" ref={trackRef}>
        {[0, 1].map((copy) => (
          <span key={copy}>{TICKER_LINE}</span>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Ticker />

      <div className="page">
      <h1>PUNK !! LIVE !! HALLOWEEN NIGHT !!</h1>
      <p className="invite">
        a party. <span>you&apos;re invited.</span> everyone is invited.
      </p>

      <div className="stage">
        <aside className="info">
          <div className="info-box">
            <p>WHO: PUNK</p>
            <p>ALSO: Punk the Band</p>
            <p>FOOD: The Halloween Reaper</p>
            <p>WHEN: Halloween. Late.</p>
            <p>
              WHERE: you&apos;ll know it when you
              <br />
              see it
            </p>
            <p>COST: $5 or a good costume</p>
          </div>
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
      </div>

      <footer>
        Copyright © 2001 PUNK ENTERPRISES. ALL RIGHTS RESERVED.
        <br />
        NO REENTRY. VOID WHERE PROHIBITED. ALSO VOID WHERE NOT PROHIBITED.
      </footer>
      </div>
    </>
  )
}

export default App
