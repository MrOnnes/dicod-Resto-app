/* eslint-disable max-len */
const itActsAsFavoriteRestoModel = (FavoriteResto) => {
    it('should return the Resto that has been added', async() => {
        FavoriteResto.putResto({ id: 1 });
        FavoriteResto.putResto({ id: 2 });

        expect(await FavoriteResto.getResto(1))
            .toEqual({ id: 1 });
        expect(await FavoriteResto.getResto(2))
            .toEqual({ id: 2 });
        expect(await FavoriteResto.getResto(3))
            .toEqual(undefined);
    });

    it('should refuse a Resto from being added if it does not have the correct property', async() => {
        FavoriteResto.putResto({ aProperty: 'property' });

        expect(await FavoriteResto.getAllResto())
            .toEqual([]);
    });

    it('can return all of the Restos that have been added', async() => {
        FavoriteResto.putResto({ id: 1 });
        FavoriteResto.putResto({ id: 2 });

        expect(await FavoriteResto.getAllResto())
            .toEqual([
                { id: 1 },
                { id: 2 },
            ]);
    });

    it('should remove favorite Resto', async() => {
        FavoriteResto.putResto({ id: 1 });
        FavoriteResto.putResto({ id: 2 });
        FavoriteResto.putResto({ id: 3 });

        await FavoriteResto.deleteResto(1);

        expect(await FavoriteResto.getAllResto())
            .toEqual([
                { id: 2 },
                { id: 3 },
            ]);
    });

    it('should handle request to remove a Resto even though the Resto has not been added', async() => {
        FavoriteResto.putResto({ id: 1 });
        FavoriteResto.putResto({ id: 2 });
        FavoriteResto.putResto({ id: 3 });

        await FavoriteResto.deleteResto(4);

        expect(await FavoriteResto.getAllResto())
            .toEqual([
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]);
    });
};

export { itActsAsFavoriteRestoModel };