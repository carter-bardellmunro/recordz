
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('records').del()
    .then(function () {
      // Inserts seed entries
      return knex('records').insert([
        {id: 1, artist: 'The Avalanches', album: 'Since I Left You', year: 2000, price: 60},
        {id: 2, artist: 'Gorillaz', album: 'Demon Days', year: 2005, price: 55},
        {id: 3, artist: 'Massive Attack', album: 'Mezzanine', year: 1998, price: 50}
      ]);
    });
};
