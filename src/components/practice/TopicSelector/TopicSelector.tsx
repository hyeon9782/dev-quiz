import {
  itemStyle,
  listStyle,
  topicSelectorStyle,
} from "./TopicSelector.style";

type Props = {
  onSelect: (key: string, value: string) => void;
};

const primaryTopics = [
  "Front",
  "Back",
  "Browser",
  "Network",
  "Algorithms",
  "Cloud",
];

const secondTopics = ["JavaScript", "TypeScript", "Vue", "React", "Next"];

const TopicSelector = ({ onSelect }: Props) => {
  const handleClick = () => {};
  return (
    <div css={topicSelectorStyle}>
      <ul css={listStyle}>
        {primaryTopics.map((primaryTopic, index) => (
          <li
            css={itemStyle}
            key={index}
            onClick={() => onSelect("topic", primaryTopic)}
          >
            {primaryTopic}
          </li>
        ))}
      </ul>
      <ul css={listStyle}>
        {secondTopics.map((secondTopic, index) => (
          <li
            css={itemStyle}
            key={index}
            onClick={() => onSelect("topic", secondTopic)}
          >
            {secondTopic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicSelector;
