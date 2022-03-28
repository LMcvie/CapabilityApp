use capability;

db.dropDatabase();


db.teams.insertMany([
    {
        _id: 'Ganon',
        name: 'Ganon',
    },
    {
        _id: 'Layton',
        name: 'Layton',
    },
    {
        _id: 'Link',
        name: 'Link',
    },
    {
        _id: 'MineSweep',
        name: 'Minesweeper',
    },
    {
        _id: 'NWoW',
        name: 'NWoW',
    },
    {
        _id: 'Pikachu',
        name: 'Pikachu',
    },
    {
        _id: 'QE',
        name: 'Quality Engineering',
    },
    {
        _id: 'Shield',
        name: 'S.H.I.E.L.D',
    },
    {
        _id: 'Sonic',
        name: 'Sonic',
    },
    {
        _id: 'Tetris',
        name: 'Tetris',
    },
    {
        _id: 'Thunderbirds',
        name: 'Thunderbirds',
    },
    {
        _id: 'Yoshi',
        name: 'Yoshi',
    },
    {
        _id: 'Starfox',
        name: 'Starfox',
    },
    {
        _id: 'N/A',
        name: 'N/A',
    },

]);