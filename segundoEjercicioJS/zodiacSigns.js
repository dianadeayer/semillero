//objeto
const people = [
  { name: "Karina", birthday: "1995-05-12" },
  { name: "Melissa", birthday: "1990-10-14" },
  { name: "Gabriel", birthday: "1992-02-19" },
  { name: "Vianney", birthday: "2001-01-07" },
  { name: "Naya", birthday: "1990-05-25" },
];

const getZodiacSign = (dateStr) => {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "Acuario";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Piscis";
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Tauro";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
    return "Géminis";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cáncer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "Escorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "Sagitario";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return "Capricornio";
};

// obtener e imprimir cada signo
const getZodiacSigns = (people) => {
  return people.map((people) => {
    const zodiacSign = getZodiacSign(people.birthday);
    console.log(`${people.name} es ${zodiacSign}`);
    return {
      name: people.name,
      zodiacSign: zodiacSign,
    };
  });
};

getZodiacSigns(people);
