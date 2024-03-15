import { PropsWithChildren, createContext, useContext, useState } from "react";
import {
  tabsContentStyle,
  tabsListStyle,
  tabsStyle,
  tabsTriggerStyle,
} from "./Tabs.style";

type TabsContextProps = {
  currentTab: string;
  changeTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextProps | null>(null);

const Tabs = ({
  children,
  defaultTab,
}: PropsWithChildren<{ defaultTab: string }>) => {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const changeTab = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <div css={tabsStyle}>
      <TabsContext.Provider value={{ currentTab, changeTab }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

export default Tabs;

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("There is no TabsContext");
  }
  return context;
};

const TabsList = ({ children }: PropsWithChildren) => {
  return <ul css={tabsListStyle}>{children}</ul>;
};

const TabsTrigger = ({
  children,
  value,
}: PropsWithChildren<{ value: string }>) => {
  const { changeTab, currentTab } = useTabsContext();
  const activeStyle = currentTab === value ? "lightblue" : "lightgray";
  return (
    <li
      role="tab"
      tabIndex={0}
      css={[tabsTriggerStyle, { backgroundColor: activeStyle }]}
      onClick={() => changeTab(value)}
    >
      {children}
    </li>
  );
};

// 추후에 비교값에 따른 display:none으로 변경
const TabsContent = ({
  children,
  value,
}: PropsWithChildren<{ value: string }>) => {
  const { currentTab } = useTabsContext();
  const activeStyle = currentTab === value ? "block" : "none";
  return (
    <div css={[tabsContentStyle, { display: activeStyle }]}>{children}</div>
  );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
