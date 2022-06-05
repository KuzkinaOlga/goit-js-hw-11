export default class BtnService{
    constructor({ loadMoreBtn, loadMoreLabel, loadMoreSpiner, classList }) {
        this.loadMoreBtn = loadMoreBtn;
        this.loadMoreLabel = loadMoreLabel;
        this.loadMoreSpiner = loadMoreSpiner;
        this.classList = classList;

    }
    show() {
        this.loadMoreBtn.style.display = 'block';
    }
    hiden() {
        this.loadMoreBtn.style.display = 'none';
    }
    enable() {
        this.loadMoreBtn.disable = false
        // this.loadMoreBtn.classList.add(this.classList)
        this.loadMoreBtn.textContent = 'Load more'

    }
    disable() {
        this.loadMoreBtn.disable = true;
        this.loadMoreBtn.textContent = 'Loading...'
        this.loadMoreSpiner.classList.remove(this.classList)
    }
}