import React from 'react';
import CollectionsOverview from "../CollectionsOverview";
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionPage from "./Collection";

const Shoppage: React.FC<RouteComponentProps> = ({ match }) => {
    return <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>;
}

export default Shoppage;