export class HouseService {
  private houses = [
    {
      id: 1,
      imgPlaceholder: 'assets/chandeleer.png',
      images: [
        'assets/achtergrond-start-min.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
      ],
      type: 'Appartement',
      year: '1883',
      energielabel: 'C',
      m2: '120',
      street: 'Van Woustraat 20-3 ',
      city: 'Amsterdam',
      status: 'Verkocht',
      price: 'EUR 610.000 k.k.',
      information:
        'Prachtig gelegen dubbele bovenwoning van ca. 100m2 in hartje de Pijp in Amsterdam. De woning is gelegen op de 3e en 4e verdieping. Op de 4e verdieping kenmerkt de woning zich door de karakteristieke balken in de slaapkamers. De woning beschikt over energielabel C. ',
    },
    {
      id: 2,
      imgPlaceholder: 'assets/chandeleer.png',
      images: [
        'assets/achtergrond-start-min.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
      ],
      type: 'Appartement',
      year: '1903',
      energielabel: 'G',
      m2: '72',
      street: 'Van Ostadestraat 167-O',
      city: 'Amsterdam',
      status: 'Verkocht',
      price: 'EUR 650.000 k.k.',
      information:
        'Een prachtig recent gerenoveerd begane grond 3 kamer appartement (72m2) aan de Van Ostadestraat midden in de Pijp. Deze luxewoning heeft 2 slaapkamers en een ruime living met open keuken, tevens beschikt de woning over een riante tuin van maar liefst ca. 70 m2. In de goed doordachte lay-out is elke m2 optimaal benut wat heeft geresulteerd in een perfecte indeling. Het zeer hoge afwerkingsniveau wordt gekenmerkt door het gebruik van mooie luxe materialen en stijlvolle kleurstellingen die naadloos op elkaar aansluiten bedacht door ARC & Ciel Amsterdam.',
    },
    {
      id: 3,
      imgPlaceholder: 'assets/chandeleer.png',
      images: [
        'assets/achtergrond-start-min.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
      ],
      type: 'Appartement',
      year: '1879',
      energielabel: 'A',
      m2: '101',
      street: 'Daniel Stalpertstraat 8–HS ',
      city: 'Amsterdam',
      status: 'Aangekocht',
      information:
        'Prachtig gelegen dubbele bovenwoning van ca. 100m2 in hartje de Pijp in Amsterdam. De woning is gelegen op de 3e en 4e verdieping. Op de 4e verdieping kenmerkt de woning zich door de karakteristieke balken in de slaapkamers. De woning beschikt over energielabel C. ',
    },
    {
      id: 4,
      imgPlaceholder: 'assets/chandeleer.png',
      images: [
        'assets/achtergrond-start-min.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
      ],
      type: 'Appartement',
      year: '1981',
      energielabel: 'E',
      m2: '70',
      street: 'Nieuwenoord 241',
      city: 'Rotterdam',
      status: 'verkocht',
      price: 'EUR 230.000 k.k.',
      information:
        'Deze 70m2 woning gelegen op de bovenstede verdieping met 3 slaapkamers is er een voor de echte belegger. Recentelijk heeft de woning ook een 3 kamer-verhuurvergunning verkregen waardoor er een keurig rendement op de woning zit. Woning wordt verkocht in verhuurde staat voor EUR 1.400 excl / maand',
    },
    {
      id: 5,
      imgPlaceholder: 'assets/chandeleer.png',
      images: [
        'assets/achtergrond-start-min.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
        'assets/chandeleer.png',
      ],
      type: 'Appartement',
      year: '1928',
      energielabel: 'C',
      m2: '75',
      street: 'Tesselseplein 39',
      city: 'Den Haag',
      status: 'verkocht',
      price: 'EUR 275.000 k.k.',
      information:
        'Op de tweede verdieping gelegen portiekappartement van ca. 75m2 met drie kamers, balkon achter en een balkon voor. De woning is gelegen in een echte Haagse volksbuurt. Het energielabel van de woning is C. Intern is de woning in een keurige staat zonder enkele bouwkundige gebreken. ',
    },
  ];

  getHouses() {
    return this.houses;
  }

  getHouse(id: number) {
    const house = this.houses.find((data) => {
      console.log(data.id);
      return data.id === id;
    });
    return house;
  }
}
