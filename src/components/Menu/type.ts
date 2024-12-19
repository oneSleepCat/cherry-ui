export type MenuMode = "horizontal" | "vertical";
export type SelectCallback = (index: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  mode?: MenuMode;
  onSelect?: SelectCallback;
  children: React.ReactNode;
}

export interface MenuContextProps {
  index: number;
  mode: MenuMode;
  onSelect?: SelectCallback;
}