/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';
import { mayBeStubbed } from 'react-stubber';

// Import Components
import HomeNavbar from './HomeNavbar';
import IntroHeader from './IntroHeader';
import HouseList from './HouseList';
import FeatureDesc from './FeatureDesc';
import CallToAction from './CallToAction';


export const HomePage = ({ viewStore, userStore, routerStore }) => (
  <div>
    <Helmet
      title="Home"
      meta={[
        { name: 'description', content: 'RentPeople home page' },
      ]}
    />
    <HomeNavbar
      viewStore={viewStore}
      userStore={userStore}
      routerStore={routerStore}
    />
    <IntroHeader />
    <HouseList />
    <FeatureDesc />
    <CallToAction />
  </div>
);

HomePage.propTypes = {
  viewStore: PropTypes.object.isRequired,
  userStore: PropTypes.object.isRequired,
  routerStore: PropTypes.object.isRequired,
};

// Applies mayBeStubbed for React Storybook

export default mayBeStubbed(observer(['viewStore', 'userStore', 'routerStore'], HomePage));
