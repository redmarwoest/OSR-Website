export class HouseService {
    
    private houses = [
        {
          id: 1,
          imgPlaceholder: "assets/chandeleer.png", 
          images: [
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
          ],
          type: "Huis",
          bouwjaar: "1901",
          energielabel: "C",
          m2: "120",
          street: "Van Ostadestraat 46",
          city: "Amsterdam",
          status: "sold",
          information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          bedBad: "3/2",
          etage: "2/3"
        },
        {
          id: 2,
          imgPlaceholder: "assets/chandeleer.png", 
          images: [
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
          ],
          type: "Huis",
          bouwjaar: "1901",
          energielabel: "C",
          m2: "120",
          street: "Van Ostadestraat 46",
          city: "Amsterdam",
          status: "sold",
          information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          bedBad: "3/2",
          etage: "2/3"
        },
        {
          id: 3,
          imgPlaceholder: "assets/chandeleer.png", 
          images: [
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
          ],
          type: "Huis",
          bouwjaar: "1901",
          energielabel: "C",
          m2: "120",
          street: "Van Ostadestraat 46",
          city: "Amsterdam",
          status: "sold",
          information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          bedBad: "3/2",
          etage: "2/3"
        },
        {
          id: 4,
          imgPlaceholder: "assets/chandeleer.png", 
          images: [
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
          ],
          type: "Huis",
          bouwjaar: "1901",
          energielabel: "C",
          m2: "120",
          street: "Van Ostadestraat 46",
          city: "Amsterdam",
          status: "sold",
          information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          bedBad: "3/2",
          etage: "2/3"
        },
        {
          id: 5,
          imgPlaceholder: "assets/chandeleer.png",
          images: [
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
          ], 
          type: "Huis",
          bouwjaar: "1901",
          energielabel: "C",
          m2: "120",
          street: "Van Ostadestraat 46",
          city: "Amsterdam",
          status: "sold",
          information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          bedBad: "3/2",
          etage: "2/3"
        },
        {
          id: 6,
          imgPlaceholder: "assets/chandeleer.png", 
          images: [
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
            "assets/chandeleer.png", 
          ],
          type: "Huis",
          bouwjaar: "1901",
          energielabel: "C",
          m2: "120",
          street: "Van Ostadestraat 46",
          city: "Amsterdam",
          status: "sold",
          information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
          bedBad: "3/2",
          etage: "2/3"
        }
      ];

    getHouses() {
        return this.houses;
  
    }

    getHouse(id: number) {
        const house = this.houses.find(
            (data) => {
              console.log(data.id)
                return data.id === id;
            }
        );
        return house
    }
}