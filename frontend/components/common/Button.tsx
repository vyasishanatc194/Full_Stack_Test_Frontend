import { ButtonProps } from "antd";
import React, { FC } from "react";
import { Button, Spin } from "antd";

export interface IButtonProps extends ButtonProps {
  buttonLabel: string;
  isLoading?: boolean;
}
const CommonButton: FC<IButtonProps> = ({
  buttonLabel,
  className,
  id,
  isLoading = false,
  htmlType="submit",
  ...restProps
}) => {
  return (
    <Button
      htmlType={htmlType}
      className={`${className} ${isLoading ? "loading" : ""}`}
      id={`${id}`}
      disabled={isLoading}
      {...restProps}
    >
      {isLoading ? <Spin /> : buttonLabel}
    </Button>
  );
};

export default CommonButton;