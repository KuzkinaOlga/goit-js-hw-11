export const getRefs = () => {
    return {
        searchForm: document.querySelector('#search-form'),
        list: document.querySelector('.img-list'),
        loadMore: document.querySelector('.button-loadmore'),
        loadMoreLabel: document.querySelector('.button-loadmore > .label'),
        loadMoreSpiner: document.querySelector('.button-loadmore > .spinner')
    }
}