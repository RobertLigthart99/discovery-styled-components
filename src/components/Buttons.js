import React from "react";
import { Box, Button, Close } from "../primitives/index";
import { Icon } from "../assets/icons/index";
import { motion } from "framer-motion";
import "../styles/global.css";

Button.IconRight = ({
  sort,
  size,
  outline,
  depth,
  children,
  iconName,
  ...props
}) => {
  return (
    <Button sort={sort} size={size} outline={outline} depth={depth} {...props}>
      <Box mr={2}>{children}</Box>
      <Icon name={iconName} ml={2} />
    </Button>
  );
};

Button.IconLeft = ({
  sort,
  size,
  outline,
  depth,
  children,
  iconName,
  width,
  height,
  ...props
}) => {
  return (
    <Button sort={sort} size={size} outline={outline} depth={depth} {...props}>
      <Icon name={iconName} width={width} height={height} />
      <Box ml={2}>{children}</Box>
    </Button>
  );
};

Button.IconOnly = ({
  sort,
  size,
  outline,
  depth,
  children,
  iconName,
  height,
  width,
  onCLick,
  Animate,
  ...props
}) => {
  const ArrowRotate = {
    open: { rotate: 90, transition: { duration: 0.2 } },
    closed: { rotate: 0, transition: { duration: 0.2 } },
  };
  return (
    <Button sort={sort} size={size} outline={outline} depth={depth} onClick={onCLick} {...props}>
      <motion.div animate={Animate} variants={ArrowRotate}>
        <Icon name={iconName} height={height} width={width} />
      </motion.div>
    </Button>
  );
};

Button.DropdownArrow = ({
  onClick,
  Animate,
  ButtonBackgroundColor,
  ...props
}) => {
  const menuVariants = {
    open: { rotate: 90, transition: { duration: 0.2 } },
    closed: { rotate: 0, transition: { duration: 0.2 } },
  };

  return (
    <Button sort="secondary" size="xs" onClick={onClick} {...props}>
      <motion.div animate={Animate} variants={menuVariants}>
        <Icon name="chevron_down" height="14px" width="14px" />
      </motion.div>
    </Button>
  );
};

Button.TopbarArrow = ({
  onClick,
  Animate,
  Variant,
  iconName,
  Initial,
  Variants,
  ...props
}) => {
  return (
    <Button sort="secondary" size="sm-icon-only" onClick={onClick} {...props}>
      <motion.div animate={Animate} variants={Variants} initial={Initial}>
        <Icon name={iconName} width="14px" height="14px" />
      </motion.div>
    </Button>
  );
};

Button.ModalClose = ({ onClick }) => {
  return (
    <Close onClick={onClick}>
      {/* // adding class name is dirty, but don't want to make primitive for this */}
      <Icon name="close" height="14px" width="14px" />
    </Close>
  );
};

export default Button;
