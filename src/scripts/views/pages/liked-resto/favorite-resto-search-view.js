/* eslint-disable max-len */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoearchView {
    getTemplate() {
        return `
        <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="restoList" class="resto">
   
        </div>
      </div>
   `;
    }

    showResto(restaurants) {
        this.showFavoriteResto(resto);
    }

    showFavoriteResto(resto = []) {
        let html;
        if (resto.length > 0) {
            html = resto.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
        } else {
            html = this._getEmptyRestoTemplate();
        }

        document.getElementById('restoList').innerHTML = html;

        document.getElementById('restoList').dispatchEvent(new Event('resto:updated'));
    }

    _getEmptyRestoTemplate() {
        return '<div class="resto-item__not__found resto__not__found"><h3>Tidak ada restaurant untuk ditampilkan</h3></div>';
    }
}

export default FavoriteRestoearchView;