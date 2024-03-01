'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const customers = [
      {
        "name": "John Doe",
        "age": "35",
        "phone": "555-1234",
        "location": "New York"
      },
      {
        "name": "Jane Smith",
        "age": "28",
        "phone": "555-5678",
        "location": "Los Angeles"
      },
      {
        "name": "Mike Johnson",
        "age": "42",
        "phone": "555-9876",
        "location": "Chicago"
      },
      {
        "name": "Sarah Williams",
        "age": "31",
        "phone": "555-4321",
        "location": "Houston"
      },
      {
        "name": "David Brown",
        "age": "39",
        "phone": "555-8765",
        "location": "Miami"
      },
      {
        "name": "Emily Davis",
        "age": "26",
        "phone": "555-3214",
        "location": "Seattle"
      },
      {
        "name": "Robert Wilson",
        "age": "47",
        "phone": "555-7654",
        "location": "Boston"
      },
      {
        "name": "Olivia Taylor",
        "age": "33",
        "phone": "555-2143",
        "location": "Denver"
      },
      {
        "name": "Daniel Anderson",
        "age": "30",
        "phone": "555-6543",
        "location": "Phoenix"
      },
      {
        "name": "Sophia Thomas",
        "age": "29",
        "phone": "555-1432",
        "location": "San Francisco"
      },
      {
        "name": "Matthew Jackson",
        "age": "36",
        "phone": "555-5432",
        "location": "Dallas"
      },
      {
        "name": "Ava White",
        "age": "32",
        "phone": "555-4321",
        "location": "Washington DC"
      },
      {
        "name": "Andrew Harris",
        "age": "45",
        "phone": "555-3210",
        "location": "Atlanta"
      },
      {
        "name": "Emma Martin",
        "age": "27",
        "phone": "555-2109",
        "location": "Philadelphia"
      },
      {
        "name": "Christopher Thompson",
        "age": "38",
        "phone": "555-1098",
        "location": "Detroit"
      },
      {
        "name": "Isabella Garcia",
        "age": "34",
        "phone": "555-0987",
        "location": "Minneapolis"
      },
      {
        "name": "Joseph Martinez",
        "age": "41",
        "phone": "555-9876",
        "location": "San Diego"
      },
      {
        "name": "Abigail Robinson",
        "age": "25",
        "phone": "555-8765",
        "location": "Portland"
      },
      {
        "name": "Samuel Clark",
        "age": "37",
        "phone": "555-7654",
        "location": "Las Vegas"
      },
      {
        "name": "Mia Rodriguez",
        "age": "31",
        "phone": "555-6543",
        "location": "Kansas City"
      },
      {
        "name": "Benjamin Lee",
        "age": "40",
        "phone": "555-5432",
        "location": "Houston"
      },
      {
        "name": "Chloe Walker",
        "age": "29",
        "phone": "555-4321",
        "location": "Chicago"
      },
      {
        "name": "Ethan Hall",
        "age": "35",
        "phone": "555-3210",
        "location": "Seattle"
      },
      {
        "name": "Natalie Young",
        "age": "26",
        "phone": "555-2109",
        "location": "Boston"
      },
      {
        "name": "Liam Hernandez",
        "age": "39",
        "phone": "555-1098",
        "location": "Denver"
      },
      {
        "name": "Madison King",
        "age": "28",
        "phone": "555-0987",
        "location": "San Francisco"
      },
      {
        "name": "Noah Green",
        "age": "33",
        "phone": "555-9876",
        "location": "Phoenix"
      },
      {
        "name": "Avery Perez",
        "age": "30",
        "phone": "555-8765",
        "location": "Dallas"
      },
      {
        "name": "Grace Turner",
        "age": "27",
        "phone": "555-7654",
        "location": "Washington DC"
      },
      {
        "name": "Carter Collins",
        "age": "42",
        "phone": "555-6543",
        "location": "Atlanta"
      },
      {
        "name": "Sofia Bennett",
        "age": "31",
        "phone": "555-5432",
        "location": "Philadelphia"
      },
      {
        "name": "Henry Rivera",
        "age": "36",
        "phone": "555-4321",
        "location": "Detroit"
      },
      {
        "name": "Ella Foster",
        "age": "32",
        "phone": "555-3210",
        "location": "Minneapolis"
      },
      {
        "name": "Owen Murphy",
        "age": "45",
        "phone": "555-2109",
        "location": "San Diego"
      },
      {
        "name": "Lily Kelly",
        "age": "29",
        "phone": "555-1098",
        "location": "Portland"
      },
      {
        "name": "Wyatt Cook",
        "age": "38",
        "phone": "555-0987",
        "location": "Las Vegas"
      },
      {
        "name": "Aubrey Coleman",
        "age": "34",
        "phone": "555-9876",
        "location": "Kansas City"
      },
      {
        "name": "Gabriel Powell",
        "age": "41",
        "phone": "555-8765",
        "location": "Houston"
      },
      {
        "name": "Samantha Brooks",
        "age": "25",
        "phone": "555-7654",
        "location": "Chicago"
      },
      {
        "name": "Christopher Simmons",
        "age": "37",
        "phone": "555-6543",
        "location": "Seattle"
      },
      {
        "name": "Alyssa Price",
        "age": "30",
        "phone": "555-5432",
        "location": "Boston"
      },
      {
        "name": "Isaac Wood",
        "age": "39",
        "phone": "555-4321",
        "location": "Denver"
      },
      {
        "name": "Makayla Barnes",
        "age": "28",
        "phone": "555-3210",
        "location": "San Francisco"
      },
      {
        "name": "Jack Ross",
        "age": "33",
        "phone": "555-2109",
        "location": "Phoenix"
      },
      {
        "name": "Sophie Coleman",
        "age": "27",
        "phone": "555-1098",
        "location": "Dallas"
      },
      {
        "name": "David Ward",
        "age": "35",
        "phone": "555-0987",
        "location": "Washington DC"
      },
      {
        "name": "Brooklyn Foster",
        "age": "32",
        "phone": "555-9876",
        "location": "Atlanta"
      },
      {
        "name": "Josephine Cox",
        "age": "41",
        "phone": "555-8765",
        "location": "Philadelphia"
      },
      {
        "name": "Caleb Butler",
        "age": "36",
        "phone": "555-7654",
        "location": "Detroit"
      },
      {
        "name": "Leah Simmons",
        "age": "29",
        "phone": "555-6543",
        "location": "Minneapolis"
      },
      {
        "name": "Ryan Ramirez",
        "age": "45",
        "phone": "555-5432",
        "location": "San Diego"
      },
      {
        "name": "Zoey Price",
        "age": "30",
        "phone": "555-4321",
        "location": "Portland"
      }
    ];
    await queryInterface.bulkInsert('customers', customers.map((customer)=>{
      return {
        ...customer,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
