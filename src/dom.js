import { headStyle } from './utils.js'

let moviesList = null
let errorTimeout = null
export let inputSearch = null
export let triggerMode = false

const createElement = ({
  tag = 'div',
  attrs = {},
  container = null,
  position = 'append',
  event = null,
  handler = null
}) => {
  const el = document.createElement(tag)

  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'innerHTML') {
      el.innerHTML = value
    } else {
      el.setAttribute(key, value)
    }
  })

  if (container && position === 'prepend') container.prepend(el)

  if (container && position === 'append') container.append(el)

  if (event && handler && typeof handler === 'function') {
    el.addEventListener(event, handler)
  }

  return el
}

const createStile = () => {
  createElement({
    tag: 'style',
    attrs: { innerHTML: headStyle },
    container: document.head
  })
}

const createMarkup = () => {
  // !div.container
  const container = createElement({
    attrs: { class: 'container' },
    container: document.body,
    position: 'prepend'
  })

  // ! body.image
  const imageContainer = createElement({
    tag: 'img',
    attrs: {
      class: 'body__image',
      src: 'image/movie1.jpg',
      alt: 'img'
    },
    container: document.body
  })

  // ! h1
  const heading = createElement({
    tag: 'h1',
    attrs: { innerHTML: 'Movies search tool' },
    container
  })

  // ! h1.image
  const image = createElement({
    tag: 'img',
    attrs: {
      class: 'heading__image',
      src: 'image/icon-film.png',
      alt: 'Movies-img'
    },
    container: heading
  })

  // ! div.search
  const searchBox = createElement({
    attrs: { class: 'search' },
    container
  })

  // ! search__group search__group--input
  const inputBox = createElement({
    attrs: { class: 'search__group search__group--input' },
    container: searchBox
  })

  // ! lable.search__label-input
  createElement({
    tag: 'label',
    attrs: {
      class: 'search__label-input',
      for: 'search',
      innerHTML: 'Movies search'
    },
    container: inputBox
  })

  // ! input.search__input
  inputSearch = createElement({
    tag: 'input',
    attrs: {
      class: 'search__input',
      id: 'search',
      type: 'input',
      placeholder: 'Enter movie title...'
    },
    container: inputBox
  })

  // ! search__group search__group--checkbox
  const checkBox = createElement({
    attrs: { class: 'search__group search__group--checkbox' },
    container: searchBox
  })

  // ! input.search__checkbox
  createElement({
    tag: 'input',
    attrs: {
      class: 'search__checkbox',
      id: 'checkbox',
      type: 'checkbox'
    },
    container: checkBox,
    event: 'click',
    handler: () => {
      triggerMode = !triggerMode
    }
  })

  //! lebel.search__label-checkbox
  createElement({
    tag: 'label',
    attrs: {
      class: 'search__label-checkbox',
      for: 'checkbox',
      innerHTML: 'Add movies to the list'
    },
    container: checkBox
  })

  // ! div.error block
  let errorContainer = createElement({
    tag: 'div',
    attrs: { class: 'error-message', style: 'display: none;' },
    container
  })
  // ! error.message
  createElement({
    tag: 'p',
    attrs: {
      class: 'error-message__text',
      innerHTML: ''
    },
    container: errorContainer
  })

  // !div.movies
  moviesList = createElement({
    attrs: { class: 'movies' },
    container
  })

  // ! div.footer
  createElement({
    tag: 'footer',
    attrs: {
      class: 'footer',
      innerHTML: 'Alex_Manuilov__2024'
    },
    container: document.body,
    position: 'append'
  })
}

// ! show.error
export const showError = (message) => {
  const errorContainer = document.querySelector('.error-message')
  if (errorContainer) {
    const errorMessage = createElement({
      tag: 'p',
      attrs: {
        class: 'error-message__text',
        innerHTML: message
      }
    })

    errorContainer.innerHTML = ''
    errorContainer.appendChild(errorMessage)
    errorContainer.style.transition = ''
    errorContainer.style.display = 'flex'
    errorContainer.style.opacity = '1'

    if (errorTimeout) {
      clearTimeout(errorTimeout)
    }

    errorTimeout = setTimeout(() => {
      hideError()
    }, 4000)
  }
}

//  ! hide.error
export const hideError = () => {
  const errorContainer = document.querySelector('.error-message')
  if (errorContainer) {
    errorContainer.style.transition = 'opacity 1s'
    errorContainer.style.opacity = '0'

    errorContainer.hideTimer = setTimeout(() => {
      errorContainer.innerHTML = ''
      errorContainer.style.display = 'none'
      errorContainer.style.transition = ''
    }, 1000)
  }
}

// ! div.movie
export const addMovieToList = (movie) => {
  const item = createElement({
    attrs: { class: 'movie' },
    container: moviesList,
    position: 'prepend'
  })

  // ! img.div.movie
  createElement({
    tag: 'img',
    attrs: {
      class: 'movie__image',
      src: /(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'image/no-imeg.jpg',
      alt: `${movie.Title} ${movie.Year}`,
      title: `${movie.Title} ${movie.Year}`
    },
    container: item
  })

  // ! p.movie__image-description
  createElement({
    tag: 'p',
    attrs: {
      class: 'movie__image-description',
      innerHTML: `${movie.Title},  ${movie.Year} year`
    },
    container: item
  })
}

export const clearMoviesMarkup = () => {
  moviesList && (moviesList.innerHTML = '')
}

export const renderApp = () => {
  createMarkup()
  createStile()
}
