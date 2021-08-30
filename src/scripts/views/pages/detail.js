import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
    async render() {
        return `
        <div id="resto" class="resto"></div>
        <div id="add-review"></div>
        <div id="likeButtonContainer"></div>
        
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoDbSource.detailResto(url.id);
        const restoContainer = document.querySelector('#resto');
        restoContainer.innerHTML = createRestoDetailTemplate(resto);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: FavoriteRestoIdb,
            resto: {
                id: resto.id,
                name: resto.name,
                city: resto.city,
                pictureId: resto.pictureId,
                rating: resto.rating,
                description: resto.description,
            },
        });

        const formName = document.querySelector('#reviewNameForm');
        const formReview = document.querySelector('#reviewContentForm');
        const restaurantId = resto.id;
        sendReview.addEventListener('click', async() => {
            if (formName.value === '' || formReview.value === '') {
                alert('Kolom tidak boleh kosong!');
                formName.value = '';
                formReview.value = '';
            } else {
                const review = {
                    id: restaurantId,
                    name: formName.value,
                    review: formReview.value,
                };
                const sendReview =
                    await RestoDbSource.sendReview(review);
                formName.value = '';
                formReview.value = '';
                console.log(sendReview);
            }
        });
    },
};

export default Detail;