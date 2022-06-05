import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ApiService from './js/api-service';
import BtnService from './js/btn-service';
import { getRefs } from './js/getRefs';
import { imageMarkUp } from './js/image-markup';
import 'material-icons/iconfont/material-icons.css';
import { scroll } from './js/scroll';

const refs = getRefs();
const imageService = new ApiService();
const btnService = new BtnService({
  loadMoreBtn: refs.loadMore,
  loadMoreLabel: refs.loadMoreLabel,
  loadMoreSpiner: refs.loadMoreSpiner,
});

const lightbox = new SimpleLightbox('.img-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
btnService.hiden();

refs.loadMore.addEventListener('click', fetchImg);
refs.searchForm.addEventListener('submit', searchImg);

function searchImg(event) {
  event.preventDefault();

  const userImput = event.currentTarget.elements.searchQuery.value.trim();
  if (userImput === '') {
    Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
  }

  if (imageService.searchQuerry !== userImput) {
    imageService.resetPage();
  }
  imageService.searchQuerry = userImput;
  refs.list.innerHTML = '';

  fetchImg();
}
function fetchImg() {
  btnService.disable();

  imageService.fetchImg().then(({ hits, totalHits }) => {
    if (hits.length === 0) {
      Notify.warning("We're sorry, but you've reached the end of search results.");
      btnService.hiden();
      return;
    }
    Notify.info(`Hooray! We found ${totalHits} images.`);
    const markUp = imageMarkUp(hits);
    refs.list.insertAdjacentHTML('beforeend', markUp);
    btnService.show();
    btnService.enable();
    lightbox.refresh();

    scroll(imageService.page);
  });
}
