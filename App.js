










getMovies = asynch () => {
const url = '${process.env.REACT_APP_API_URL}/movies?searchQuery=${this.state.searchQuery}';
let movieResponse = await axios.get(url);


}