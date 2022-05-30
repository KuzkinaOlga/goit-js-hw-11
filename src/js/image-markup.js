export function imageMarkUp(images) {
    return images.map(img => `<li>
    <a href="${img.largeImageURL}">
    <img src="${img.webformatURL}" loading="lazy"/>
   <div class='d-inline-flex justify-content-center'>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill bg-light text-dark'>thumb_up_off_alt
        </i>
        ${img.likes}
      </p>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill bg-light text-dark'>visibility</i>
        ${img.views}
      </p>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill bg-light text-dark'>comment</i>
        ${img.comments}
      </p>
      <p class='p-1'>
        <i class='material-icons-round badge rounded-pill bg-light text-dark'>cloud_download
        </i>
        ${img.downloads}
      </p>
    </div>
    </a>
    </li>`).join('')
}


//  <div class="info">
//     <p class="info-item">
//       <b>Likes: ${img.likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views: ${img.views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments: ${img.comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads: ${img.downloads}</b>
//     </p>
//   </div>