/* eslint-disable max-len */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import FavoriteRestoearchView from './liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-resto/favorite-resto-show-presenter';

const view = new FavoriteRestoearchView();

const Favorite = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        new FavoriteRestoShowPresenter({ view, favoriteResto: FavoriteRestoIdb });
    },
};

export default Favorite;