/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

    I.amOnPage('/');
    pause();
    I.seeElement('.post-item__title a');

    const firstResto = locate('.post-item__title a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restoList');
    const likedRestoTitle = await I.grabTextFrom('.post-item__title');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);
});