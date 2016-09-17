import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Box } from 'reflexbox';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import '../styles.css';

// Import Components
import Snackbar from 'material-ui/Snackbar';
import Footer from './Footer';


import { renderCurrentView } from '../../stores/router';


@inject('viewStore', 'routerStore') @observer
class App extends React.Component { 
    render() {
        const { routerStore, viewStore } = this.props;
        const { isSnackbarOpened, snackbarMessage, closeSnackbar } = viewStore;
        const { currentView } = routerStore;
        return (
            <Box>
                <Helmet
                    titleTemplate="%s - Rent People"
                    defaultTitle="Rent People"
                    meta={[
                        { name: 'description', content: 'Rent People application' },
                    ]}
                />
                { renderCurrentView(currentView) }
                <DevTools />
                <Footer />
                <Snackbar
                    open={isSnackbarOpened}
                    message={snackbarMessage}
                    autoHideDuration={5000}
                    onRequestClose={closeSnackbar}
                />
            </Box>       
        )
    }
}

App.wrappedComponent.propTypes = {
  viewStore: PropTypes.object.isRequired,
  routerStore: PropTypes.object.isRequired,
};

export default App;
