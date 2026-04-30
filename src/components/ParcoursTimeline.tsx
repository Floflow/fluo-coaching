'use client'

const parcours = [
  {
    num: '1', active: false,
    titre: 'Entretien découverte gratuit',
    desc: "On se rencontre, je réponds à toutes tes questions et on évalue ensemble si le bilan te correspond.",
    last: false, scrollToPhases: false,
  },
  {
    num: '2', active: true,
    titre: 'Phase préliminaire',
    desc: 'Analyse de ta demande, définition du cadre et du format adapté.',
    last: false, scrollToPhases: true,
  },
  {
    num: '3', active: true,
    titre: "Phase d'investigation",
    desc: 'Introspection et exploration. Construction de ton projet.',
    last: false, scrollToPhases: true,
  },
  {
    num: '4', active: true,
    titre: 'Phase de conclusion',
    desc: "Synthèse du travail effectué. Tu repars avec de la clarté et une direction.",
    last: false, scrollToPhases: true,
  },
  {
    num: '5', active: false,
    titre: 'Rendez-vous de suivi à 6 mois',
    desc: "On se retrouve 6 mois après la fin du bilan pour faire le point, voir où tu en es, ce qui a avancé, ce qui reste à ajuster.",
    last: true, scrollToPhases: false,
  },
]

function scrollToPhases() {
  document.getElementById('phases')?.scrollIntoView({ behavior: 'smooth' })
}

export default function ParcoursTimeline() {
  return (
    <div className="methode-timeline">
      {parcours.map((step) => (
        <div
          key={step.num}
          className="timeline-step"
          onClick={step.scrollToPhases ? scrollToPhases : undefined}
          style={step.scrollToPhases ? { cursor: 'pointer' } : undefined}
        >
          <div className="timeline-left">
            <div className={`timeline-dot${step.active ? ' active' : ''}`}>
              <span>{step.num}</span>
            </div>
            {!step.last && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <h4 style={step.scrollToPhases ? { textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'var(--text-light)' } : undefined}>
              {step.titre}
            </h4>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
