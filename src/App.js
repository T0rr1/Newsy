import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  newspaperOutline,
  trendingUpOutline,
  createOutline,
  searchCircleOutline,
  personCircleOutline
} from 'ionicons/icons'
import News from './pages/Tabs/News';
import Trending from './pages/Tabs/Trending';
import Submit from './pages/Tabs/Submit';
import Search from './pages/Tabs/Search';
import Profile from './pages/Tabs/Profile';
import EditProfile from './pages/Auth/EditProfile';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Forget from './pages/Auth/Forget';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/news" />} exact={true} />
          <Route path="/news" component={News} />
          <Route path="/trending" component={Trending} />
          <Route path="/submit" component={Submit} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forget" component={Forget} />
          <Route component={() => <Redirect to="/news" />} />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='news' href='/news'>
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Newsy</IonLabel>
          </IonTabButton>
          <IonTabButton tab='trending' href='/trending' >
            <IonIcon icon={trendingUpOutline} />
            <IonLabel>Trending </IonLabel>
          </IonTabButton>
          <IonTabButton tab='submit' href='/submit' >
            <IonIcon icon={createOutline} />
            <IonLabel>Submit</IonLabel>
          </IonTabButton>
          <IonTabButton tab='search' href='/search' >
            <IonIcon icon={searchCircleOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab='profile' href='/profile' >
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
