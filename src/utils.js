export const headStyle = `
* {
  box-sizing: border-box;
}
h1 {
  display: flex;
  font-size: 3rem;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 10px;
}

body {
  font-family: 'Times New Roman', Times, serif;
  overflow-y: scroll;
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
}

.body__image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: auto 100%;
  filter: brightness(1) blur(11px);
  z-index: -1;
  object-fit: cover;
}

.body__image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  background-size: cover;
}

.container {
  position: relative;
  z-index: 1;
  justify-content: center;
  width: min(100% - 40px, 1024px);
  height: 100%;
  min-height: 100vh;
  margin: 0px 0px 0px 30px;
  margin-inline: auto;
  border-bottom: 4px solid rgb(141, 141, 141);
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 0px 20px;
}

.movie {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.movie__image {
  width: 100%;
  object-fit: cover;
}

.movie__image-description {
  border-bottom: 3px solid rgb(47, 47, 48);
  font-weight: bolder;
  padding: 5px;
  padding-top: 10px;
  margin-top: auto;
  font-size: 15px;
  color: #050505;
  text-align: center;
}

.search {
  position: relative;
  background-color: rgb(238, 224, 202);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  border-top: 4px solid rgb(141, 141, 141);
  border-bottom: 4px solid rgb(141, 141, 141);
}

.search::before,
.search::after {
  position: absolute;
  top: 50%;
  width: 50%;
  height: 2px;
  background-color: rgb(9, 110, 243);
}

.search__label-input {
  text-align: center;
  display: block;
  margin-bottom: 20px;
}

.search__input {
  text-align: center;
  min-width: 350px;
  padding: 10px 10px;
  border-radius: 7px;
  font-size:smaller;
  border: 1px solid lightsteelblue;
  box-shadow: 4px 4px 25px rgba(34, 34, 34, 0.5);
}

.search__label-checkbox {
  font-size: 0.8 rem;
}

.search__group--input {
  margin-bottom: 5px;
}

.search__group--checkbox {
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  gap: 5px;
  align-items: center;
}

.footer {
  width: min(100% - 40px, 1024px);
  height: auto;
  margin: 0px auto;
  margin-bottom: 20px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgb(238, 224, 202);
  font-size: 1rem;
  border-bottom: 4px solid rgb(141, 141, 141);
}

.error-message__text {
  position: fixed;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  position: fixed;
  transform: translate(-50%, -50%);
  padding: 10px;
  z-index: 1;
  left: 50%;
  background-color: rgb(243, 117, 138);
  border-radius: 10px;
  color: rgb(0, 0, 0);
  width: 70vw;
  max-width: 400px;
  opacity: 1;
}
`
