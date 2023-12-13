//your student id, firstname, and lastname here
//65130500007 จักรธร สอวิเศษ

class Movies {

  constructor(){
    this.movies = []
  }
  getAllMovies(){
    return this.movies
  }
  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined
    }

    const duplicateMovie = this.movies.find(
      (movie) => movie.title.toLowerCase() === title.toLowerCase() &&
      movie.director.toLowerCase() === director.toLowerCase()
    )
    if (duplicateMovie) {
      return undefined
    }
    const newMovie = {
      title, director, year, genre
    }
    this.movies.push(newMovie)
    return newMovie
  }
  updateMovie(title, updateDetails) {
    const toUpdate = this.movies.find(movies => movies.title.toLowerCase() === title.toLowerCase())
    if (!toUpdate) {
      return undefined
    }
    Object.assign(toUpdate, updateDetails)
    return toUpdate
  }
  deleteMovieByTitle(title) {
    const toDelete = this.movies.findIndex(movies => movies.title.toLowerCase() === title.toLowerCase())
    if(toDelete === -1) {
      return 'no movie delete'
    }
    return this.movies.splice(toDelete, 1)
  }

}

module.exports = Movies
