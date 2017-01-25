/**
 * StoryListItem
 *
 * Lists the name and the issue count of a story
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import StoryLink from './StoryLink';
import Wrapper from './Wrapper';

export class StoryListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    let nameprefix = '';

    // If the story is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (item.owner.login !== this.props.currentGenre) {
      nameprefix = `${item.owner.login}/`;
    }

    // Put together the content of the story
    const content = (
      <Wrapper>
        <StoryLink href={item.html_url} target="_blank">
          {nameprefix + item.name}
        </StoryLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.open_issues_count} />
        </IssueLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`story-list-item-${item.full_name}`} item={content} />
    );
  }
}

StoryListItem.propTypes = {
  item: React.PropTypes.object,
  currentGenre: React.PropTypes.string,
};

export default connect(createStructuredSelector({
  currentGenre: makeSelectCurrentUser(),
}))(StoryListItem);
