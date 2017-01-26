/**
 * StoryListItem
 *
 * Lists the name and the issue count of a story
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentGenre } from 'containers/App/selectors';
import { changeStory } from 'containers/HomePage/actions';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import StoryLink from './StoryLink';
import Wrapper from './Wrapper';

export class StoryListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onStoryClick(item) {
    console.log("Story clicked!!")
    console.log(item)
  }

  render() {
    const item = this.props.item;
    let nameprefix = '';

    // Put together the content of the story
    const content = (
      <Wrapper>
        <StoryLink href={item.html_url} target="_blank" onClick={() => this.props.onStoryClick(item)}>
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

const mapStateToProps = createStructuredSelector({
  currentGenre: makeSelectCurrentGenre(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onStoryClick: (item) => dispatch(changeStory(item)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(StoryListItem);