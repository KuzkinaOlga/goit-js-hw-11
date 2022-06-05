export function imageMarkUp(images) {
    return images.map(img => `<li>
    <a href="${img.largeImageURL}">
    <div class="thumb">
    <img src="${img.webformatURL}" loading="lazy"/>
    </div>
   <div class='d-inline-flex justify-content-center'>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill text-dark'>thumb_up_off_alt
        </i>
        ${img.likes}
      </p>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill text-dark'>visibility</i>
        ${img.views}
      </p>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill text-dark'>comment</i>
        ${img.comments}
      </p>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill text-dark'>cloud_download
        </i>
        ${img.downloads}
      </p>
    </div>
    </a>
    </li>`).join('')
}


