import { useState } from "react";
import Navbar from "../components/Navbar";
import SportsPopup from "../components/SportsPopup";
import MedalistPopup from "../components/MedalistPopup";
import ViralFooter from "../components/ViralFooter";

const sports = [
  {
    id: 1,
    name: "Athletics",
    logo: "sport/archery.svg",
    icon: "🏃",
    medals: { gold: 1, silver: 3, bronze: 0 },
    winners: [
      { name: "Norman Pritchard", event: "Men's 200m", medal: "silver" , year:1900, Host_City: "Paris"},
      { name: "Norman Pritchard", event: "Men's 200m hurdles", medal: "silver", year:1900, Host_City: "Paris" },
      { name: "Neeraj Chopra", event: "Men's javelin throw", medal: "gold", year:2020, Host_City: "Tokyo" },
      { name: "Neeraj Chopra", event: "Men's javelin throw", medal: "silver", year:2024, Host_City: "Paris" },
    ],
  },
  
  {
    id: 2,
    name: "Badminton",
    logo: "/sports/badminton.svg",
    icon: "🏸",
    medals: { gold: 0, silver: 1, bronze: 2 },
    winners: [
      { name: "Saina Nehwal", event: "Women's singles", medal: "bronze", year: 2012, Host_City: "London" },
      { name: "P. V. Sindhu", event: "Women's singles", medal: "silver", year: 2016, Host_City: "Rio de Janeiro" },
      { name: "P. V. Sindhu", event: "Women's singles", medal: "bronze", year: 2020, Host_City: "Tokyo" },


    ],
  },
  
  {
    id: 3,
    name: "Boxing",
    logo: "/sports/boxing.svg",
    icon: "🥊",
    medals: { gold: 0, silver: 0, bronze: 3 },
    winners: [
      { name: "Vijender Singh", event: "Men's middleweight", medal: "bronze", year: 2008, Host_City: "Beijing" },
      { name: "Mary Kom", event: "Women's flyweight", medal: "bronze", year: 2012, Host_City: "London" },
      { name: "Lovlina Borgohain", event: "Women's welterweight", medal: "bronze", year: 2020, Host_City: "Tokyo" },
    ],
  },
  
  {
    id: 4,
    name: "Field Hockey",
    logo: "/sports/hockey.svg",
    icon: "🏑",
    medals: { gold: 8, silver: 1, bronze: 4 },
    winners: [
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1928 , Host_City: "Amsterdam" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1932 , Host_City: "Los Angeles" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1936 , Host_City: "Berlin" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1948 , Host_City: "London" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1952 , Host_City: "Helsinki" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1956 , Host_City: "Melbourne" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "silver", year : 1960 , Host_City: "Rome" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1964 , Host_City: "Tokyo" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "bronze", year : 1968 , Host_City: "Mexico City" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "bronze", year : 1972 , Host_City: "Munich" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "gold", year : 1980 , Host_City: "Moscow" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "bronze", year : 1920 , Host_City: "Tokyo" },
      { name: "Indian Men's Hockey Team", event: "Men's tournament", medal: "bronze", year : 1924 , Host_City: "Paris" }
    ],
  },
  {
    id: 5,
    name: "Tennis",
    logo: "/sports/tennis.svg",
    icon: "🎾",
    medals: { gold: 0, silver: 0, bronze: 1 },
    winners: [
      { name: "Leander Paes", event: "Men's singles", medal: "bronze", year: 1996, Host_City: "Atlanta" },
    ],
  },

  {
    id: 6,
    name: "Wrestling",
    logo: "/sports/wrestling.svg",
    icon: "🤼",
    medals: { gold: 0, silver: 2, bronze: 6 },
    winners: [
      
      { name: "K. D. Jadhav", event: "Men's freestyle bantamweight", medal: "bronze", year: 1952, Host_City: "Helsinki" },
      { name: "Sushil Kumar", event: "Men's freestyle 66 kg", medal: "bronze", year: 2008, Host_City: "Beijing" },
      { name: "Sushil Kumar", event: "Men's freestyle 66 kg", medal: "silver", year: 2012, Host_City: "London" },
      { name: "Yogeshwar Dutt", event: "Men's freestyle 60 kg", medal: "bronze", year: 2012, Host_City: "London" },
      { name: "Sakshi Malik", event: "Women's freestyle 58 kg", medal: "bronze", year: 2016, Host_City: "Rio de Janeiro" },
      { name: "Ravi Kumar Dahiya", event: "Men's freestyle 57 kg", medal: "silver", year: 2020, Host_City: "Tokyo" },
      { name: "Bajrang Punia", event: "Men's freestyle 65 kg", medal: "bronze", year: 2020, Host_City: "Tokyo" },
      { name: "Aman Sehrawat", event: "Men's freestyle 57 kg", medal: "bronze", year: 2024, Host_City: "Paris" },


    ],
  },
  {
    id: 7,
    name: "Weightlifting",
    logo: "/sports/weightlifting.svg",
    icon: "🏋️",
    medals: { gold: 0, silver: 1, bronze: 1 },
    winners: [
      { name: "Karnam Malleswari", event: "Women's 69 kg", medal: "bronze", year: 2000, Host_City: "Sydney" },
      { name: "Saikhom Mirabai Chanu", event: "Women's 49 kg", medal: "silver", year: 2020, Host_City: "Tokyo" },

    ],
  },
  {
    id: 8,
    name: "Shooting",
    logo: "/sports/shooting.svg",
    icon: "🔫",
    medals: { gold: 1, silver: 2, bronze: 4 },
    winners: [
      { name: "Rajyavardhan Singh Rathore", event: "Men's double trap", medal: "silver", year: 2004, Host_City: "Athens" },
      { name: "Abhinav Bindra", event: "Men's 10m air rifle", medal: "gold", year: 2008, Host_City: "Beijing" },
      { name: "Vijay Kumar", event: "Men's 25m rapid fire pistol", medal: "silver", year: 2012, Host_City: "London" },
      { name: "Gagan Narang", event: "Men's 10m air rifle", medal: "bronze", year: 2012, Host_City: "London" },
      { name: "Manu Bhaker", event: "Women's 10m air pistol", medal: "bronze", year: 2024, Host_City: "Paris" },
      { name: "Manu Bhaker & Sarabjot Singh", event: "Mixed 10m air pistol team", medal: "bronze", year: 2024, Host_City: "Paris" },
      { name: "Swapnil Kusale", event: "Men's 50m rifle 3 positions", medal: "bronze", year: 2024, Host_City: "Paris" },
    ], 
  },
];

function getTopMedalists() {
  const medalists = new Map();

  sports.forEach((sport) => {
    sport.winners.forEach((winner) => {
      const medalist = medalists.get(winner.name) ?? {
        name: winner.name,
        gold: 0,
        silver: 0,
        bronze: 0,
        achievements: [],
      };

      medalist[winner.medal]++;
      medalist.achievements.push({
        ...winner,
        sport: sport.name,
      });
      medalists.set(winner.name, medalist);
    });
  });

  return [...medalists.values()]
    .sort(
      (first, second) =>
        second.gold - first.gold ||
        second.silver - first.silver ||
        second.bronze - first.bronze
    )
    .slice(0, 3);
}

function generatePositions(count) {
  const positions = [];
  let attempts = 0;

  while (positions.length < count && attempts < 5000) {
    attempts++;

    const candidate = {
      x: Math.random() * 80 + 7,
      y: Math.random() * 76 + 8,
      size: Math.random() > 0.8 ? 90 : 72,
    };

    const collision = positions.some((item) => {
      const dx = candidate.x - item.x;
      const dy = candidate.y - item.y;
      return Math.sqrt(dx * dx + dy * dy) < 11;
    });

    if (!collision) {
      positions.push(candidate);
    }
  }

  return positions;
}

function SportCircleButton({ sport, position, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-0 rounded-full bg-white border border-black/10 shadow-[0_8px_25px_rgba(0,0,0,0.07)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.14)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer max-w-[60px] max-h-[60px] sm:max-w-none sm:max-h-none focus:outline-none focus:ring-2 focus:ring-neutral-400"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${position.size}px`,
        height: `${position.size}px`,
      }}
      onClick={onClick}
      aria-label={sport.name}
    >
      {!imgError && sport.logo ? (
        <img
          src={sport.logo}
          alt={sport.name}
          className="w-[52%] h-[52%] object-contain select-none pointer-events-none"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-3xl sm:text-4xl select-none pointer-events-none">
          {sport.icon}
        </span>
      )}
    </button>
  );
}

export default function SportsHome() {
  const [positions] = useState(() => generatePositions(sports.length));
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedMedalist, setSelectedMedalist] = useState(null);
  const topMedalists = getTopMedalists();

  return (
    <main id="home" className="relative flex min-h-screen w-full flex-col bg-[#f8f8f6]">
      <Navbar
        medalists={topMedalists}
        onMedalistClick={setSelectedMedalist}
      />

      <section
        id="sports"
        aria-label="Explore sports"
        className="relative min-h-0 w-full flex-1 overflow-hidden"
      >
        {sports.map((sport, index) => {
          const position = positions[index];
          if (!position) return null;

          return (
            <SportCircleButton
              key={sport.id}
              sport={sport}
              position={position}
              onClick={() => setSelectedSport(sport)}
            />
          );
        })}
      </section>

      {selectedSport && (
        <SportsPopup
          sport={selectedSport}
          onClose={() => setSelectedSport(null)}
        />
      )}

      {selectedMedalist && (
        <MedalistPopup
          medalist={selectedMedalist}
          onClose={() => setSelectedMedalist(null)}
        />
      )}

      <ViralFooter />
    </main>
  );
}