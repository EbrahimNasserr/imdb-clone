'use client'

import { Provider } from 'react-redux';
import store from '../services/store';

const ProviderRedux = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux;
