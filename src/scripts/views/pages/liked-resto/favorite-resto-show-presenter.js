class FavoriteRestoShowPresenter {
    constructor({ view, favoriteResto }) {
        this._view = view;
        this._favoriteResto = favoriteResto;

        this._showFavoriteResto();
    }

    async _showFavoriteResto() {
        const resto = await this._favoriteResto.getAllResto();
        console.log(resto);
        this._displayResto(resto);
    }

    _displayResto(resto) {
        this._view.showFavoriteResto(resto);
        console.log(resto.length);
    }
}

export default FavoriteRestoShowPresenter;