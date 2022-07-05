import React from 'react';
import {Text} from 'react-native';

import {Navbar} from '@app/components/organisms/Navbar';
import {Divider} from '@app/components/atoms/Divider';
import {Card} from '@app/components/atoms/Card';
import {TextH1} from '@app/components/atoms/TextH1';
import {TextH2} from '@app/components/atoms/TextH2';
import {TextH3} from '@app/components/atoms/TextH3';
import {TextH4} from '@app/components/atoms/TextH4';
import {TextH5} from '@app/components/atoms/TextH5';
import {TextLarge} from '@app/components/atoms/TextLarge';
import {TextRegular} from '@app/components/atoms/TextRegular';
import {TextMedium} from '@app/components/atoms/TextMedium';
import {TextSmall} from '@app/components/atoms/TextSmall';
import {TextTiny} from '@app/components/atoms/TextTiny';
import {ClickableText} from '@app/components/atoms/ClickableText';
import {ButtonSmall} from '@app/components/atoms/ButtonSmall';
import {BasketIcon} from '@app/assets/svgs';
import {ProductCard} from '@app/components/organisms/ProductCard';

export const HomeScreen = () => {
  return (
    <>
      <Navbar />

      <Card>
        <Text>Card</Text>
      </Card>
      <TextH1>Andres h1</TextH1>
      <Divider />
      <TextH2>Andres h2</TextH2>
      <TextH3>Andres h3</TextH3>
      <TextH4>Andres h4</TextH4>
      <TextH5>Andres h5</TextH5>
      <TextLarge>Text large</TextLarge>
      <TextRegular>Text Regular</TextRegular>
      <TextMedium>Text Medium</TextMedium>
      <TextSmall>Text Small</TextSmall>
      <TextTiny>Text Tiny</TextTiny>
      <ClickableText onClick={() => console.log('Link clicked')}>
        Clickable text
      </ClickableText>
      <ButtonSmall>
        <BasketIcon />
      </ButtonSmall>
      <ProductCard />
    </>
  );
};
