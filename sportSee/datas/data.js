const USER_MAIN_DATA = [
  {
      id: 12,
      userInfos: {
          firstName: 'Karl',
          lastName: 'Dovineau',
          age: 31,
      },
      todayScore: 0.12,
      keyData: {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50
      }
  },
  {
      id: 18,
      userInfos: {
          firstName: 'Marco',
          lastName: 'Patate',
          age: 21,
      },
      todayScore: 0.60,
      keyData: {
          calorieCount: 1000,
          proteinCount: 120,
          carbohydrateCount: 110,
          lipidCount: 190
      }
  }
]

const USER_ACTIVITY = [
  {
      userId: 12,
      sessions: [
          {
              day: '2020-07-01',
              kilogram: 80,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 80,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 81,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 81,
              calories: 290
          },
          {
              day: '2020-07-05',
              kilogram: 80,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 78,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 76,
              calories: 390
          }
      ]
  },
  {
      userId: 18,
      sessions: [
          {
              day: '2020-07-01',
              kilogram: 90,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 81,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 100,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 98,
              calories: 500
          },
          {
              day: '2020-07-05',
              kilogram: 90,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 101,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 102,
              calories: 390
          }
      ]
  }
]


const USER_AVERAGE_SESSIONS = [
  {
      userId: 12,
      sessions: [
          {
              day: 1,
              sessionLength: 80
          },
          {
              day: 2,
              sessionLength: 76
          },
          {
              day: 3,
              sessionLength: 59
          },
          {
              day: 4,
              sessionLength: 80
          },
          {
              day: 5,
              sessionLength: 0
          },
          {
              day: 6,
              sessionLength: 0
          },
          {
              day: 7,
              sessionLength: 80
          }
      ]
  },
  {
      userId: 18,
      sessions: [
          {
              day: 1,
              sessionLength: 90
          },
          {
              day: 2,
              sessionLength: 80
          },
          {
              day: 3,
              sessionLength: 110
          },
          {
              day: 4,
              sessionLength: 50
          },
          {
              day: 5,
              sessionLength: 100
          },
          {
              day: 6,
              sessionLength: 0
          },
          {
              day: 7,
              sessionLength: 0
          }
      ]
  }
]


const USER_PERFORMANCE = [
  {
      userId: 12,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 30,
              kind: 1
          },
          {
              value: 100,
              kind: 2
          },
          {
              value: 90,
              kind: 3
          },
          {
              value: 44,
              kind: 4
          },
          {
              value: 30,
              kind: 5
          },
          {
              value: 90,
              kind: 6
          }
      ]
  },
  {
      userId: 18,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 100,
              kind: 1
          },
          {
              value: 56,
              kind: 2
          },
          {
              value: 32,
              kind: 3
          },
          {
              value: 92,
              kind: 4
          },
          {
              value: 102,
              kind: 5
          },
          {
              value: 76,
              kind: 6
          }
      ]
  }
];

export default {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
};