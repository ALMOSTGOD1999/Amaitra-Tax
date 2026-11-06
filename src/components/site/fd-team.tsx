import biprodipPhoto from "@/assets/team2/Biprodip.jpg";
import seryasreePhoto from "@/assets/team2/Seryasree Das.jpg";
import aryaPhoto from "@/assets/team2/Arya Sengupta.jpg";
import ashokPhoto from "@/assets/team2/Ashok Dutt.jpg";

interface TeamMember {
  name: string;
  role: string;
  photo: string | null;
}

const TEAM: TeamMember[] = [
  { name: "Biprodip Das", role: "Office Executive", photo: biprodipPhoto },
  { name: "Seryasree Das", role: "Office Assistant & Receptionist", photo: seryasreePhoto },
  { name: "Arya Sengupta", role: "Marketing Executive", photo: aryaPhoto },
  { name: "Ashok Dutt", role: "Pantry & House-Keeping", photo: ashokPhoto },
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
              {member.photo ? (
                <div className="relative size-44 shrink-0 overflow-hidden rounded-full sm:size-52">
                  <img
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
              ) : (
                <div
                  aria-label={`Portrait of ${member.name} coming soon`}
                  className="flex size-44 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-5xl text-primary sm:size-52"
                >
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
              )}
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
