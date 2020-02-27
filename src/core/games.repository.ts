export const gamesRepository = {
  getGames: (firebase, setGames) => {
    const { gamesCollection } = firebase;
    return gamesCollection
      .orderBy('name', 'desc')
      .onSnapshot(({ docs }) => {
        const gamesFromDB = []

        docs.forEach(doc => {
          const details = {
            id: doc.id,
            holder: doc.data().holder,
            name: doc.data().name
          }
          gamesFromDB.push(details)
        })

        setGames(gamesFromDB)
    })
  },
  addGame: (firebase, game) => {
    const { gamesCollection } = firebase;
    game.date = new Date();
    return gamesCollection.add(game);
  }
}