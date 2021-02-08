


import React from 'react';

import { SmallText, StyledCard } from './Styled';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string;
  title: string;
  description: any;
  smallText?: string;
}

const Card: React.FC<CardProps> = ({
  header,
  title,
  description,
  smallText
}: CardProps) => (
  <StyledCard>
    {header && <div className="ch-header">{header}</div>}
    <div className="ch-body">
      <div className="ch-title">{title}</div>
      <div className="ch-description">{description}</div>
      {smallText && <SmallText>{smallText}</SmallText>}
    </div>
  </StyledCard>
);

export default Card;
