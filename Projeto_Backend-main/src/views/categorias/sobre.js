const BASE_URL_PATH =  'http://localhost:3000/'
let fetchCont = 0;
let isOver = false;

window.onload = async () => {

  const headerProdutosText = document.getElementById('nav-item-produtos')
  paintHeader(headerProdutosText)

  const data = await handleUserFetchTokenData('stayOnThePageStillNotLoggedIn');


}
