/* eslint-disable no-undef */
// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md

const { reloadApp } = require("./reload");

describe("Example", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("First game card has the like text and button are available on the screen", async () => {
    // tests if the elements are on the screen
    await expect(element(by.id("game-card-like-text-1"))).toExist();
    await expect(element(by.id("game-card-like-button-1"))).toExist();

    // test game card has the like text available on the screen
    const likeTextAttrs = await element(
      by.id("game-card-like-text-1"),
    ).getAttributes();

    await expect(element(by.text(likeTextAttrs.text))).toExist();
  });

  it("pressing the like button of the first game card should increase the like count by one", async () => {
    // get like text(like count) before the like button is "tapped"
    const beforeLikeTextAttrs = await element(
      by.id("game-card-like-text-1"),
    ).getAttributes();

    // Tap to the like button to increase like count
    await element(by.id("game-card-like-button-1")).tap();

    // calculate final like text(count)
    const increasedLike = Number(beforeLikeTextAttrs.text) + 1;

    // get updated like text
    const afterLikeText = await element(
      by.id("game-card-like-text-1"),
    ).getAttributes();

    // test whether the like text(count) has been increased
    await expect(element(by.text(afterLikeText.text.toString()))).toHaveText(
      increasedLike.toString(),
    );
  });
});
