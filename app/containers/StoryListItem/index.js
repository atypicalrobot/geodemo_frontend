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

    // Put together the content of the story
    const content = (
      <Wrapper>
        <StoryLink href={item.html_url} target="_blank">
          {item.title}
        </StoryLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`story-list-item-${item.slug}`} item={content} />
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
