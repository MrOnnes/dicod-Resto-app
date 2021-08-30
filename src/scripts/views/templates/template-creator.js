/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createSkeletonRestoTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
    <div class="restoList lazyload">
    <article>
      <img class="post-item__thumbnail lazyload" 
      src="./images/placeholder.png" alt="skeleton" 
      />
      <h4 class="city skeleton">
        <span>Lorem</span>
      </h4>  
      <div class="post-item__content">
        <h1 class="post-item__title skeleton">
          <a href="#">Lorem</a>
        </h1>
        <h4 class="post-item__rate">
          <span class="fa fa-star star"></span></h4>  
        <h4 class="post-item__description skeleton">Lorem</h4>  
      </div>
    </article>
  </div>
  `;
    }
    return template;
};

const createRestoDetailTemplate = (resto) => `
  <article class="restoDetail">
    <picture>
    </picture>
    <img class="detailRestoPict lazyload" 
    src="${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}" 
    alt="${resto.name}" />

    <div class="detailRestoTitle">
      <h1 class="post-item__title" style="font-size: 36px;">${resto.name}</h1>
      <h4 class="post-item__rate">
      <span class="fa fa-star star"></span> ${resto.rating}</h4>
    </div>

    <div class="detailRestoAddress">
      <span class="whiteBox"><p>${resto.city}</p></span> 
      <span class="whiteBox"><p>${resto.address}</p></span>
    </div>
    

    <div class="detailRestoDescription">
      <h3>About this place</h3>
      <p>${resto.description}</p>
      <h4>Menu makanan</h4>
      <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
      <h4>Menu minuman</h4>
      <p>${resto.menus.drinks.map((drinks) => drinks.name).join(', ')}</p>
    </div>
  </article> 

    <div class="restoDetail">
      <h3 style="
      padding-left: 15px;
      ">Review</h3>

      <form id="review-form">
      <div class="reviewNameForm">
        <input id="reviewNameForm" type="text" 
        class="form-control" placeholder="Name">
      </div>
      <div class="reviewContentForm">
        <input id="reviewContentForm" type="text" 
        class="form-control" placeholder="Type Something">
      </div>
      <div class="sendReview">
        <button id="sendReview" class="btn btn-success">Post Review</button>
     </div>

      </form>
        ${resto.customerReviews.map((review) => `
            <div class="ReviewList">
              <div class="reviewName">
                <h4>${review.name}</h4>
                <span>-</span>
                <p class="date-review">${review.date}</p>
              </div>
              <div class="reviewContent">
                <p tabindex="0">${review.review}</p>
              </div>
            </div>
        `).join('')}
    </div>
`;

const createRestoItemTemplate = (resto) => `
<div class="restoList lazyload">
  <article>
    <a href="${`/#/detail/${resto.id}`}">
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL}small/${resto.pictureId}">
        <img class="post-item__thumbnail lazyload" src=
        "${CONFIG.BASE_IMAGE_URL}medium/${resto.pictureId}" 
        alt="Gambar suasana restoran ${resto.name} di ${resto.city}" 
        />
      </picture>
    </a>
    <h4 class="city">
      <span>${resto.city}</span>
    </h4>  
    <div class="post-item__content">
      <h1 class="post-item__title">
        <a href="${`/#/detail/${resto.id}`}">${resto.name}</a>
      </h1>
      <h4 class="post-item__rate">
        <span class="fa fa-star star"></span> ${resto.rating}</h4>  
      <h4 class="post-item__description">${resto.description}</h4>  
    </div>
  </article>
</div>
`
;
const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export { createRestoItemTemplate,
    createRestoDetailTemplate,
    createLikeRestoButtonTemplate,
    createUnlikeRestoButtonTemplate,
    createSkeletonRestoTemplate,
};