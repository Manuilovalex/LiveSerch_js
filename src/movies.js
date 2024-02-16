import { renderApp, addMovieToList, inputSearch, clearMoviesMarkup, triggerMode, showError, hideError } from './dom.js'

export let searchLast = null

const debounceTime = (() => {
  let timer = null

  return (callBack, ms) => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
    timer = setTimeout(callBack, ms)
  }
})()

const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data || !data.Search) {
        console.log('sss', searchLast)
        showError(`'${searchLast}' is not found! Please try again...`)
        throw Error('No data')
      } else {
        console.log(data)
        return data.Search
      }
    })

const inputSearchHandler = (e) => {
  debounceTime(() => {
    const searchString = e.target.value.trim()

    if (searchString.length < 4 || searchString === searchLast) return
    if (!triggerMode) clearMoviesMarkup()

    getData(`https://www.omdbapi.com/?i=tt3896198&apikey=ca956212&s=${searchString}`)
      .then((data) => data.forEach((movie) => addMovieToList(movie)))
      .catch((err) => console.log(err))

    searchLast = searchString
  }, 2000)
}

export const appInit = () => {
  renderApp()
  inputSearch.addEventListener('input', inputSearchHandler)
}
