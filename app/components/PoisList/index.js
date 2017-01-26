import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import PoiListItem from 'containers/PoiListItem';

function PoisList({ loading, error, pois, selectedPoiSlug }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (pois !== false) {
    return <List items={pois} component={PoiListItem} selectedSlug={selectedPoiSlug} />;
  }

  return null;
}

PoisList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  pois: PropTypes.any,
};

export default PoisList;
