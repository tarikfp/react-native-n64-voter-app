import { text, withKnobs, array, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Linking, View } from "react-native";
import { COMMON_STYLES } from "@/theme";
import GameCard from "./component";

storiesOf("Main", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>{getStory()}</View>
  ))
  .add("Game Card", () => <GameCardStory />);

function GameCardStory() {
  const [isCollapsed, setCollapsed] = React.useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = React.useState<boolean>(false);

  const [likesCount, setLikesCount] = React.useState<number>(
    number("Initial like count (will be applied only on initial mount)", 152),
  );

  const onWikipediaPress = (url: string) => Linking.openURL(url);

  return (
    <GameCard
      id={1}
      onAnimationEnd={() => setShouldAnimate(false)}
      shouldAnimate={shouldAnimate}
      title={text("Title", "Title text here...")}
      wikipedia={text(
        "Wikipedia URL",
        "https://en.wikipedia.org/wiki/F-Zero_X",
      )}
      description={text("Description", "Description text here...")}
      developer={text("Developer", "Developer text here...")}
      genre={array("Genre", ["Sample genre"])}
      imageUrl={text(
        "Image URL",
        "https://i.ebayimg.com/images/g/p-oAAOSw6fle6c6~/s-l600.jpg",
      )}
      likeCount={likesCount}
      isCollapsed={isCollapsed}
      onLikePress={() => {
        setLikesCount((prev) => prev + 1);
        setShouldAnimate(true);
      }}
      toggleCollapse={() => setCollapsed((prev) => !prev)}
      onImagePress={() => null}
      onWikipediaPress={onWikipediaPress}
    />
  );
}
