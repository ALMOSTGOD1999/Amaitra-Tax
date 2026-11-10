import proprietorPhoto from "@/assets/team/arindam-maitra-proprietor.jpg";
import team01 from "@/assets/team/Soumya Pal.jpg.jpeg";
import team02 from "@/assets/team/Kanchan Sanyal.jpg.jpeg";
import team03 from "@/assets/team/Jyotirmay Adhikary.jpg.jpeg";
import team04 from "@/assets/team/Kausik Saha.jpg.jpeg";
import team05 from "@/assets/team/Biltu Saha.jpg.jpeg";
import team06 from "@/assets/team/Arnab Chakraborty.jpg.jpeg";
import team07 from "@/assets/team/Amit Karmakar.jpg.jpeg";
import team08 from "@/assets/team/Niladri Mandal.jpg.jpeg";
import team09 from "@/assets/team/Suraj Singh Rawat.jpg.jpeg";
import team10 from "@/assets/team/Mriganka Sarkar.jpg.jpeg";
import team11 from "@/assets/team/Sanjoy Sarkar.jpg.jpeg";
import team12 from "@/assets/team/Asim Datta.jpg.jpeg";
import team14 from "@/assets/team/Bibek Das.jpg.jpeg";
import team15 from "@/assets/team/Chandan Chakrabarty.jpg.jpeg";
import team16 from "@/assets/team/Anindya Chandra.jpg.jpeg";
import team17 from "@/assets/team/Sayan Kumar Das.jpg.jpeg";
import team18 from "@/assets/team/Narayan Dey.jpg.jpeg";
import team19 from "@/assets/team/Madhusudan Mandal.jpg.jpeg";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const TEAM: TeamMember[] = [
  { name: "Sanjoy Sarkar", role: "Sr. Tax Consultant & Office Executive — Systems", photo: team11 },
  { name: "Madhusudan Mandal", role: "Sr. Tax Consultant & Advisor (IT & GST)", photo: team19 },
  {
    name: "Jyotirmay Adhikary",
    role: "Sr. Tax Consultant & Office Executive — Management",
    photo: team03,
  },
  { name: "Asim Datta", role: "Sr. Tax Consultant & GST/Accounts Head", photo: team12 },
  { name: "Arnab Chakraborty", role: "Sr. Tax Consultant & Accounting Analyst", photo: team06 },
  { name: "Mriganka Sarkar", role: "Sr. Tax Assistant & Accountant", photo: team10 },
  { name: "Niladri Mandal", role: "Sr. Tax Assistant & Accountant", photo: team08 },
  { name: "Sayan Kumar Das", role: "Office Management & System Head", photo: team17 },
  { name: "Kausik Saha", role: "Tax Assistant & Accountant", photo: team04 },
  { name: "Biltu Saha", role: "Sr. Tax Assistant", photo: team05 },
  { name: "Amit Karmakar", role: "Tax Assistant & Accountant", photo: team07 },
  { name: "Suraj Singh Rawat", role: "Tax Assistant & Accountant", photo: team09 },
  { name: "Anindya Chandra", role: "Office Management & System", photo: team16 },
  { name: "Kanchan Sanyal", role: "Cashier & Accountant", photo: team02 },
  { name: "Bibek Das", role: "Accountant", photo: team14 },
  { name: "Chandan Chakrabarty", role: "Accountant", photo: team15 },
  { name: "Soumya Pal", role: "Tax Assistant", photo: team01 },
  { name: "Narayan Dey", role: "Pantry & House Keeping", photo: team18 },
];

export function OurTeamSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Proprietor — solo, centered on top. Replace bytes of arindam-maitra-proprietor.jpg with the new portrait to swap. */}
        <figure className="mb-16 flex flex-col items-center text-center">
          <div className="relative size-56 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/70 ring-offset-4 ring-offset-background sm:size-64">
            <img
              src={proprietorPhoto}
              alt="Portrait of Arindam Maitra"
              loading="eager"
              fetchPriority="high"
              className="size-full object-cover"
            />
          </div>
          <span aria-hidden="true" className="mt-7 h-px w-12 bg-primary/70" />

          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Arindam Maitra
          </h2>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Advocate and TAX Consultant <br /> Proprietor
          </p>
        </figure>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <h2 className="mt-4 font-serif text-xl font-bold text-foreground">{member.name}</h2>
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
