export const initStore= {
    cars: [{
          name: 'Hyundai Grand i10',
          colour: 'White',
          maxSeats: 4,
          rent: 450,
          vehicleNo: '18 D 4356',
          type: 'Petrol Car',
          image: 'hyundai.jpg',
          booking: {
            name: "aakash",
            phone: 7854859645,
            issueDate: "45-45-4251",
            returnDate: "45-45-4251"
          },
          description: 'The Hyundai Grand i10 has 1 Petrol Engine on offer. The Petrol engine is 1197 cc. ... Depending upon the variant and fuel type the Grand i10 has a mileage of 18.9 kmpl. The Grand i10 is a 5 seater Hatchback and has a length of 3765mm, width of 1660mm and a wheelbase of 2425mm.',
          status: true
      },
      {
        name: 'Ford Eco Sport',
        colour: 'Blue',
        maxSeats: 5,
        rent: 600,
        vehicleNo: '18 M 2256',
        type: 'Deisel Car',
        image: 'ecoSport.jpg',
        booking: {
          name: "aakash",
          phone: 7854859645,
          issueDate: "45-45-4251",
          returnDate: "45-45-4251"
        },
        description: 'Ford EcoSport. ... The Ford EcoSport (pronounced ek-ho sport) is a subcompact crossover SUV, originally built in Brazil by Ford Brazil since 2003, at the Camaçari plant. A second generation concept model was launched in 2012, and is also assembled in new factories in India, Thailand, Russia and Romania.',
        status: false
      },
      {
        name: 'Maruti Suzuki XL6',
        colour: 'Black',
        maxSeats: 4,
        rent: 300,
        vehicleNo: '20 D 4776',
        type: 'Petrol Car',
        image: 'maruti.jpg',
        booking: {
          name: "aakash",
          phone: 7854859645,
          issueDate: "45-45-4251",
          returnDate: "45-45-4251"
        },
        description: 'The Maruti Suzuki XL6, although based on the Ertiga, is a premium MPV with rugged styling elements and added equipment. It packs features like automatic LED headlamps, cruise control and rains sensing wipers, and the sense of space is elevated with captain seats in the middle row.',
        status: true
      },
      {
        name: 'Honda CR-V',
        colour: 'Blue',
        maxSeats: 4,
        rent: 500,
        vehicleNo: '45 D 5856',
        type: 'Petrol Car',
        image: 'honda.jpg',
        booking: {
          name: "aakash",
          phone: 7854859645,
          issueDate: "45-45-4251",
          returnDate: "45-45-4251"
        },
        description: 'For 2020, Honda dropped the CR-V\'s powertrain lineup from two engines to one. Now, a turbocharged 1.5-liter four-cylinder engine comes standard, and it\'s rated at 190 horsepower and 179 pound-feet of torque. A continuously variable automatic transmission (CVT) is also standard.',
        status: false
      }
    ],
    selectedCar: {
        
    }
};
