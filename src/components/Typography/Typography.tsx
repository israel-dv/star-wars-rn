import React from "react";

import { TextRegular } from "./TextRegular/TextRegular";
import { HeadingShadow } from "./HeadingShadow";

type TypographyProps = {
  children: React.ReactNode;
};

/**
 * This component was created to have a better structure and
 * naming of typographies. With this we can call Typography.Title
 * or Typograpgy.TextRegular instead TextRegular / Title
 *
 * All this components are only Text. Another component can't be wrapped
 * by Typograhy
 */

export const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Typography.Title = HeadingShadow;
Typography.TextRegular = TextRegular;