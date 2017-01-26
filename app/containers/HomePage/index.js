/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { makeSelectStories, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import StoriesList from 'components/StoriesList';
import PoisList from 'components/PoisList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadStories } from '../App/actions';
import { changeGenre } from './actions';
import { makeSelectGenre, makeSelectStory } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state genre is not null, submit the form to load stories
   */
  componentDidMount() {
    if (this.props.genre && this.props.genre.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, stories, pois, story } = this.props;
    const storiesListProps = {
      loading,
      error,
      stories,
    };

    let poiContent;

    if(story !== false) {

      if (story.pois !== false) {
        poiContent = (<PoisList pois={story.pois} loading={loading} error={error} />);
        // poiContent = (<Marker position={position}><Popup><span>Get in my belly!</span></Popup></Marker>)
       
      }

    }

    const position = [51.505, -0.09];

    const mapStyle = {
      height: '480px'
    }

    const map = (
      <Map center={position} zoom={13} style={mapStyle}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );


    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="genre">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="genre"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.genre}
                  onChange={this.props.onChangeGenre}
                />
              </label>
            </Form>
            <StoriesList {...storiesListProps} />
            {poiContent}
            {map}
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  stories: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  genre: React.PropTypes.string,
  onChangeGenre: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeGenre: (evt) => dispatch(changeGenre(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStories());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  stories: makeSelectStories(),
  story: makeSelectStory(),
  genre: makeSelectGenre(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
