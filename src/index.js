import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ApiService from './js/api-service';
import BtnService from './js/btn-service';
import { getRefs } from './js/getRefs'
import { imageMarkUp } from './js/image-markup';
import 'material-icons/iconfont/material-icons.css';



const refs = getRefs();
const imageService = new ApiService()
const btnService = new BtnService({loadMoreBtn: refs.loadMore, loadMoreLabel: refs.loadMoreLabel, loadMoreSpiner: refs.loadMoreSpiner})

btnService.hiden()


refs.loadMore.addEventListener('click', fetchImg)
refs.searchForm.addEventListener('submit', searchImg)


function searchImg(event) {
    event.preventDefault();
    console.log(event.currentTarget.elements.searchQuery.value);
    const userImput = event.currentTarget.elements.searchQuery.value.trim();
    if (userImput === '') {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
        return
    }

    if (imageService.searchQuerry !== userImput) {
        imageService.resetPage()
    }
    imageService.searchQuerry = userImput;
    refs.list.innerHTML = '';
   
    fetchImg()

}
function fetchImg() {
    btnService.disable()

    imageService.fetchImg().then(({ hits }) => {
        if (hits.length === 0) {
            Notify.warning("We're sorry, but you've reached the end of search results.")
            btnService.hiden()
            return
        }
        const markUp = imageMarkUp(hits)
        refs.list.insertAdjacentHTML('beforeend', markUp)
        btnService.show()
        btnService.enable()
        
    });
}



