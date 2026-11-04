import team201 from "@/assets/team2/team2-01.jpg";
import team202 from "@/assets/team2/team2-02.jpg";
import team203 from "@/assets/team2/team2-03.jpg";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const TEAM: TeamMember[] = [
  { name: "Seryasree Das", role: "Office Assistant", photo: team201 },
  { name: "Avipsa Maitra", role: "Operational Head", photo: team202 },
  { name: "Biprodip Das", role: "Office Executive", photo: team203 },
];

export function FutureDreamsTeam() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-primary" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Our Team
            </p>
            <span aria-hidden="true" className="h-px w-10 bg-primary" />
          </div>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The people behind <em className="text-primary">Future Dreams</em>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Financial &amp; Marketing Consultancy — Loans &middot; Taxation &middot; Investments
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <li
              key={member.name}
              className="group flex flex-col items-center rounded-sm border border-border bg-card px-6 py-10 text-center transition duration-300 hover:border-primary/60 hover:shadow-md"
            >
              <div className="relative size-44 shrink-0 overflow-hidden rounded-full sm:size-52">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <span aria-hidden="true" className="mt-6 h-px w-8 bg-primary/70" />
              <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{member.name}</h3>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {member.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
