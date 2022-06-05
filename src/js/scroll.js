export function scroll(page) {
  if (page !== 2) {
    const { height: cardHeight } = document
      .querySelector('.img-list')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
