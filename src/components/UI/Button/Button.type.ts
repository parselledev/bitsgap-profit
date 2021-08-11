export type ButtonType = {
  text: string;
  type: 'primary' | 'dark';
  onClick?: () => void;
  loading?: boolean;
};
