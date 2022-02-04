# React Movie Builder App

**Visit the live demo here:** [Live Demo](https://sad-pike-d255ed.netlify.app/)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On changing the movie form, the current movie item updates |        1 |
| On submitting the movie form, a new movie is added to the view  |        2 |
| On clicking a movie (when a filter is not active -- this is a bug that would requre useEffect to fix correctly) the movie gets deleted  |        1 |
| On typing in the filter input, the movies are filtered by name  |        2 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : tracks state for `allMovies`,  `filteredMovies`, `movieFormYearReleased`, `movieFormDirector`, `movieTitle`, `movieFormColor` |1|
| `App()` : passes state as props correctly to `MovieForm`, `Movie`, and `MovieList` |1|
| `App()` : define a `submitMovie` function that adds a new movie to the array using form state. Note that this function gets passed down to the movie form, which is where it will be attached to a submit listener |2|
| `App()` : define a `handleDeleteMovie` function that deleted a movie from the state array using id |2|
| `App()` : define a `handleFilterMovies` function that takes in a string and set `filteredMovies` to an array of movies whose name matches that string |2|
| `MovieForm({ setMovieFormName, movieFormYearReleased, setMovieFormTitle, movieFormDirector, setMovieFormColor, movieFormColor, submitMovie })` : on change for each input, call the appropriate state handler prop with the correct `e.target.value` to update `App.js` state.  |2|
| `MovieForm({ setMovieFormName, movieFormYearReleased, setMovieFormTitle, movieFormDirector, setMovieFormColor, movieFormColor, submitMovie })` : on submit, add a movie to state by calling `props.submitMovie` in the correct way.  |2|
| `MovieList({ movies })` : takes in a `movies` prop and renders a list of `Movie` components. |1|
| `Movie({ movie })` : takes in a movie and renders it with the correct color background |1|

## Stretch goal ideas:
- Note that the delete functionality doesn't work if the filter is active. Why is that? Can you fix it?
- Track the `query` as state. Use `useEffect` to filter the movies every time this query changes.
- What if instead of just adding movies to state, you added them to supabase and made your data persistent (fetching from supabase on load)?
