import RestoDbSource from '../../data/restodb-source';
import {
    createRestoItemTemplate,
    createSkeletonRestoTemplate,
} from '../templates/template-creator';

const Popular = {
    async render() {
        return `
        <div class="content">
        <h2 class="content__heading">Popular Restaurant</h2>
        <div id="restoList" class="resto">
        ${createSkeletonRestoTemplate(20)}
        </div>
      </div>
      `;
    },

    async afterRender() {
        const popularResto = await RestoDbSource.restoList();
        const restoContainer = document.querySelector('#restoList');
        restoContainer.innerHTML = '';
        popularResto.forEach((restaurants) => {
            restoContainer.innerHTML += createRestoItemTemplate(restaurants);
        });
    },
};

export default Popular;