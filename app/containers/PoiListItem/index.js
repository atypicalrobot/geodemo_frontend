/**
 * PoiListItem
 *
 * Lists the name and the issue count of a poi
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

// import { makeSelectCurrentGenre } from 'containers/App/selectors';
import { changePoi } from 'containers/HomePage/actions';
import ListItem from 'components/ListItem';
import PoiLink from './PoiLink';
import SelectedPoiLink from './SelectedPoiLink';
import Wrapper from './Wrapper';

export class PoiListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onPoiClick(item) {
    console.log("Poi clicked!!");
    console.log(item);
  }

  render() {
    const item = this.props.item;
    let selectedSlug = this.props.selectedSlug;
    let poiContent = "";


    if(item.slug == selectedSlug){
      // extraContent = (<p> {item.description} </p>)
      poiContent = (
        <SelectedPoiLink href={item.html_url} target="_blank" onClick={() => this.props.onPoiClick(item)}>
          {item.title}
        </SelectedPoiLink>
      )
    } else {
      poiContent = (
        <PoiLink href={item.html_url} target="_blank" onClick={() => this.props.onPoiClick(item)}>
          {item.title}
        </PoiLink>
      )
    }

    // Put together the content of the poi
    const content = (
      <Wrapper>
        {poiContent}
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`poi-list-item-${item.slug}`} item={content} />
    );
  }
}

PoiListItem.propTypes = {
  item: React.PropTypes.object,
  // currentGenre: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  // currentGenre: makeSelectCurrentGenre(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onPoiClick: (item) => dispatch(changePoi(item)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(PoiListItem);