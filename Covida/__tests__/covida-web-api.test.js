'use strict'

const frisby = require('frisby')
const child_process = require('child_process')

let server

// eslint-disable-next-line no-undef
beforeAll(done => {
    server = child_process.fork('./lib/index.js', ['./tests/mocks/groups.json'])
    server.on('message', msg =>{
        if (msg.running) {
            done()
        }
    })
})

// eslint-disable-next-line no-undef
afterAll(() => server.kill())

let GROUPS_EXPECTED = [
    {
        'name': 'G13',
        'description': 'Grupo 13 de PI',
        'games': ['FIFA 21', 'Bloodroots', 'FUSER', 'Prodeus']
    },
    {
        'name': 'G15',
        'description': 'Grupo 15 de PI',
        'games': ['The Falconeer', 'FreeCell+', 'Poker Club']
    }
]

// eslint-disable-next-line no-undef
test('Test groups route to get all groups', () => frisby
    .get('http://localhost:8000/covida/groups')
    .expect('status', 200)
    .expect('json', '[0]', GROUPS_EXPECTED[0])
    .expect('json', '[1]', GROUPS_EXPECTED[1])    
)


// eslint-disable-next-line no-undef
test('Test groups routes to get a group details successfully', () => frisby
    .get('http://localhost:8000/covida/groups/G13')
    .get('status', 200)
    .expect('json', 'name', 'G13')
    .expect('json', 'description', 'Grupo 13 de PI')
    .expect('json', 'games', ['FIFA 21', 'Bloodroots', 'FUSER', 'Prodeus'])
)

// eslint-disable-next-line no-undef
test('Test groups route to get a group details when group does not exist', () => frisby
    .get('http://localhost:8000/covida/groups/G00')
    .get('status', 404)
)

// eslint-disable-next-line no-undef
test('Test groups route to add a group', () => frisby
    .put('http://localhost:8000/covida/groups/G16', {
        description: 'Grupo 16 de PI'
    })
    .expect('status', 201)
    .get('http://localhost:8000/covida/groups/G16')
    .expect('status', 200)
    .expect('json', 'name', 'G16')
    .expect('json', 'description', 'Grupo 16 de PI')
    .expect('json', 'games', [])
)

// eslint-disable-next-line no-undef
test('Test groups route to edit a group', () => frisby
    .put('http://localhost:8000/covida/groups/G15', {
        groupname: 'G14',
        description: 'Groupo 14 de PI'
    })
    .expect('status', 204)
    .get('http://localhost:8000/covida/groups/G14')
    .expect('satus', 200)
    .expect('json', 'name', 'G14')
    .expect('json', 'description', 'Grupo 14 de PI')
    .expect('json', 'games', ['The Falconeer', 'FreeCell+', 'Poker Club'])
    .get('http://localhost:8000/covida/groups/G15')
    .expect('satus', 404)
)


// eslint-disable-next-line no-undef
test('Test groups route to add a game to a group', () => frisby
    .post('http://localhost:8000/covida/groups/G13/games', {
        gamename: 'Mars Horizon'
    })
    .expect('status', 204)
    .get('http://localhost:8000/covida/groups/G13')
    .expect('status', 200)
    .expect('json', 'name', 'G13')
    .expect('json', 'description', 'Grupo 13 de PI')
    .expect('json', 'games', ['FIFA 21', 'Bloodroots', 'FUSER', 'Prodeus', 'Mars Horizon'])
)

// eslint-disable-next-line no-undef
test('Test groups route to delete a game from a group', () => frisby
    .del('http://localhost:8000/covida/groups/G13/games/Mars+Horizon')
    .expect('status', 204)
    .get('http://localhost:8000/covida/groups/G13')
    .expect('status', 200)
    .expect('json', 'name', 'G13')
    .expect('json', 'description', 'Grupo 13 de PI')
    .expect('json', 'games', ['FIFA 21', 'Bloodroots', 'FUSER', 'Prodeus']) 
)

// eslint-disable-next-line no-undef
test('Test groups route to get some rated games from a group', () => frisby
    .get('http://localhost:8000/covida/groups/G13/ratedgames?min=80&max=100')
    .expect('status', 200)
    .expect('json', '[0]', 'Bloodroots')
    .expect('json', '[1]', 'Prodeus')
)

const POPULAR_GAMES_EXPECTED = [
    {
        'name': 'Grand Theft Auto V',
        'release_date': '09/17/2013',
        'genres': ['Shooter', 'Racing', 'Sport', 'Adventure'],
        'platforms': ['PC (Microsoft Windows)', 'PlayStation 3', 'Xbox 360', 'PlayStation 4', 'Xbox One'],
        'rating': 93.42341438605955,
        'description': 'The biggest, most dynamic and most diverse open world ever created, Grand Theft Auto V blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.'  
    },
    {
        'name': 'The Witcher 3: Wild Hunt',
        'release_date': '05/19/2015',
        'genres': ['Role-playing (RPG)', 'Adventure'], 
        'platforms': ['PC (Microsoft Windows)', 'PlayStation 4', 'Xbox One'],
        'rating': 93.7143286592613,
        'description': 'RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.'
        
    }
]


// eslint-disable-next-line no-undef
test('Test games route to get the most popular games', () => frisby
    .get('http://localhost:8000/covida/topgames?limit=2')
    .expect('status', 200)
    .expect('json', '[0]', POPULAR_GAMES_EXPECTED[0])
    .expect('json', '[1]', POPULAR_GAMES_EXPECTED[1])
)


// eslint-disable-next-line no-undef
test('Test search route to get search results for a game name???', () => frisby
    .get('http://localhost:8000/covida/games/Zelda')
    .expect('status', 200)
    .expect('json', '[0]', 'FIFA 21')
    .expect('json', '[1]', 'FIFA 21: Legacy Edition')
    .expect('json', '[2]', 'FIFA 21: Ultimate Edition')
    .expect('json', '[3]', 'FIFA 21: Champions Edition')   
)
