import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';

function StoriesList({ loading, error, stories }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (stories !== false) {
    return <List items={stories} component={StoryListItem} />;
  }

  return null;
}

StoriesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  stories: PropTypes.any,
};

export default StoriesList;
