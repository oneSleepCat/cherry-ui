export type MenuMode = "horizontal" | "vertical";
export type SelectCallback = (index: string) => void;
export type TriggerType = 'hover' | 'click';

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  style?: React.CSSProperties;
  mode?: MenuMode;
  onSelect?: SelectCallback;
  children: React.ReactNode;
  trigger?: TriggerType;
  defaultOpenSubMenus?: string[];
}

export interface MenuContextProps {
  index: string;
  mode: MenuMode;
  trigger?: TriggerType;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}