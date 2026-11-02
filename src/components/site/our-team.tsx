import team01 from '@/assets/team/team-01.jpg';
import team02 from '@/assets/team/team-02.jpg';
import team03 from '@/assets/team/team-03.jpg';
import team04 from '@/assets/team/team-04.jpg';
import team05 from '@/assets/team/team-05.jpg';
import team06 from '@/assets/team/team-06.jpg';
import team07 from '@/assets/team/team-07.jpg';
import team08 from '@/assets/team/team-08.jpg';
import team09 from '@/assets/team/team-09.jpg';
import team10 from '@/assets/team/team-10.jpg';
import team11 from '@/assets/team/team-11.jpg';
import team12 from '@/assets/team/team-12.jpg';
import team14 from '@/assets/team/team-14.jpg';
import team15 from '@/assets/team/team-15.jpg';
import team16 from '@/assets/team/team-16.jpg';
import team17 from '@/assets/team/team-17.jpg';
import team18 from '@/assets/team/team-18.jpg';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const TEAM: TeamMember[] = [
  { name: "Soumya Pal", role: "Tax Assistant", photo: team01 },
  { name: "Kanchan Sanyal", role: "Tax Assistant", photo: team02 },
  { name: "Jyotirmay Adhikary", role: "Office Executive — Management", photo: team03 },
  { name: "Kausik Saha", role: "Sr. Tax Assistant", photo: team04 },
  { name: "Biltu Saha", role: "Sr. Tax Assistant", photo: team05 },
  { name: "Arnab Chakraborty", role: "Accounting Analyst", photo: team06 },
  { name: "Amit Karmakar", role: "Tax Assistant & Accounts", photo: team07 },
  { name: "Niladri Mandal", role: "Sr. Tax Assistant & Accounts", photo: team08 },
  { name: "Suraj Singh Rawat", role: "Tax Assistant & Accounts", photo: team09 },
  { name: "Mriganka Sarkar", role: "Sr. Tax Assistant & Accounts", photo: team10 },
  { name: "Sanjoy Sarkar", role: "Office Executive — Systems", photo: team11 },
  { name: "Asim Datta", role: "GST & Accounts Head", photo: team12 },
  { name: "Bibek Das", role: "Accountant", photo: team14 },
  { name: "Chandan Chakrabarty", role: "Accountant", photo: team15 },
  { name: "Anindya Chandra", role: "Office Management & Systems", photo: team16 },
  { name: "Sayan Kumar Das", role: "Office Management & Systems", photo: team17 },
  { name: "Narayan Dey", role: "Pantry & Housekeeping Head", photo: team18 },
];

export function OurTeamSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <li
              key={member.name}
              className="group flex flex-col items-center rounded-sm border border-border bg-card px-6 py-10 text-center transition duration-300 hover:border-primary/60 hover:shadow-md"
            >
              <div className="relative size-44 shrink-0 overflow-hidden rounded-full ring-1 ring-secondary transition duration-300 group-hover:ring-2 group-hover:ring-primary sm:size-52">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <span aria-hidden="true" className="mt-6 h-px w-8 bg-primary/70" />
              <h2 className="mt-4 font-serif text-xl font-bold text-foreground">
                {member.name}
              </h2>
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
