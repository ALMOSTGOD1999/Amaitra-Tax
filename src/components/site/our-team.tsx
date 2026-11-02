import { Reveal } from '@/components/site/reveal';
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
import team13 from '@/assets/team/team-13.jpg';
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
  { name: "Ayan Chaudhuri", role: "Cash Manager & Management", photo: team13 },
  { name: "Bibek Das", role: "Accountant", photo: team14 },
  { name: "Chandan Chakrabarty", role: "Accountant", photo: team15 },
  { name: "Anindya Chandra", role: "Office Management & Systems", photo: team16 },
  { name: "Sayan Kumar Das", role: "Office Management & Systems", photo: team17 },
  { name: "Narayan Dey", role: "Pantry & Housekeeping Head", photo: team18 },
];

export function OurTeamSection() {
  return (
    <section className="section">
      <div className="wrap">
        <ul className="team-grid">
          {TEAM.map((member, i) => (
            <li key={member.name} className="team-card">
              <Reveal delay={(i % 3) * 110}>
                <div className="team-photo">
                  <img
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    width={400}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <span aria-hidden="true" className="team-rule" />
                <h2>{member.name}</h2>
                <p className="team-role">{member.role}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
