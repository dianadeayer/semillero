//Objeto
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

  switch (month) {
    case 1:
      return day <= 19 ? "Capricornio" : "Acuario";
    case 2:
      return day <= 18 ? "Acuario" : "Piscis";
    case 3:
      return day <= 20 ? "Piscis" : "Aries";
    case 4:
      return day <= 19 ? "Aries" : "Tauro";
    case 5:
      return day <= 20 ? "Tauro" : "Géminis";
    case 6:
      return day <= 20 ? "Géminis" : "Cáncer";
    case 7:
      return day <= 22 ? "Cáncer" : "Leo";
    case 8:
      return day <= 22 ? "Leo" : "Virgo";
    case 9:
      return day <= 22 ? "Virgo" : "Libra";
    case 10:
      return day <= 22 ? "Libra" : "Escorpio";
    case 11:
      return day <= 21 ? "Escorpio" : "Sagitario";
    case 12:
      return day <= 21 ? "Sagitario" : "Capricornio";
    default:
      return "Signo desconocido";
  }
};

const isValidDate = (dateStr) => {
  if (typeof dateStr !== "string") return false;
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) return false;
  return true;
};

// lista de fechas validas
const printValidZodiac = (person, zodiacSign) => {
  console.log(`${person.name} es ${zodiacSign}`);
};

// imprime mensaje si la fecha es invalida
const printInvalidDateMessage = (person) => {
  console.log(`❌ ${person.name} tiene una fecha inválida: ${person.birthday}`);
};

// Recorre la lista de personas
const getZodiacSigns = (people) => {
  people.forEach((person) => {
    if (!isValidDate(person.birthday)) {
      printInvalidDateMessage(person);
    } else {
      const zodiacSign = getZodiacSign(person.birthday);
      printValidZodiac(person, zodiacSign);
    }
  });
};

// Ejecuta
getZodiacSigns(people);
