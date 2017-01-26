/**
*
* PoiMarker
*
*/

import React from 'react';
// import styled from 'styled-components';

import ReactPlayer from 'react-player'
import ImageZoom from 'react-medium-image-zoom'

import { Marker, Popup } from 'react-leaflet';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PoiMarker(props) {
  var poiInnerContent = null;
  let opacity = 0.5;
  if(props.selected == true){
  	opacity = 1.0;
  }
  if (props.poi.plugin.slug == 'video') {
	  poiInnerContent = (<ReactPlayer url={props.poi.metadata.video_url} width='600' height='350' playing />);
  } if (props.poi.plugin.slug == 'imagezoom') {
	  poiInnerContent = (<ImageZoom image={{ src: props.poi.metadata.image, className: 'img', style: { width: '25em' } }} zoomImage={{ src: props.poi.metadata.zoom_image, }} />);
  } if (props.poi.plugin == 'timeline') {
    //const timelineItems = JSON.parse(props.poi.metadata.timelineItems)
    //poiInnerContent = (<Timeline options={timelineOptions} items={timelineItems} />);
  }else {
	  // poiInnerContent = <LoginButton />;
  }
  return (
    <Marker position={[props.poi.mpoint.coordinates[1], props.poi.mpoint.coordinates[0]]} opacity={opacity}>
    	<Popup maxWidth='300px'>
    		<span><h1>{props.poi.title}</h1> {props.poi.description} <br /> {poiInnerContent} </span>
    	</Popup>
    </Marker>
  );
}

PoiMarker.propTypes = {
	poi: React.PropTypes.any,
};

export default PoiMarker;
