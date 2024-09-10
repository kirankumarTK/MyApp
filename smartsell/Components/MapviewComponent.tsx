import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {MapviewComponentModel, RetailerMasterBO} from '../models/commonModels';
import {useAppSelector} from '../redux/hooks';

const MapviewComponent: React.FC<MapviewComponentModel> = ({mapStyle}) => {
  const retailerMasters = useAppSelector(
    state => state.retailerMastrSlice.retailerMasters,
  );

  const [region, setRegion] = useState({
    latitude:
      retailerMasters.length > 0 ? Number(retailerMasters[0].Latitude) : 0,
    longitude:
      retailerMasters.length > 0 ? Number(retailerMasters[0].Longitude) : 0,
    latitudeDelta: 3.0,
    longitudeDelta: 3.0,
  });

  const isMarkerVisible = (marker: RetailerMasterBO) => {
    const {Latitude, Longitude} = marker;
    return (
      Latitude >= region.latitude - region.latitudeDelta / 2 &&
      Latitude <= region.latitude + region.latitudeDelta / 2 &&
      Longitude >= region.longitude - region.longitudeDelta / 2 &&
      Longitude <= region.longitude + region.longitudeDelta / 2
    );
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={mapStyle}
      region={{
        latitude: retailerMasters.length > 0 ? Number(retailerMasters[0].Latitude) : 0,
        longitude:retailerMasters.length > 0 ? Number(retailerMasters[0].Longitude) : 0,
        latitudeDelta: 3.0,
        longitudeDelta: 3.0,
      }}
      onRegionChangeComplete={newRegion => setRegion(newRegion)}
      showsUserLocation={true}
      zoomEnabled={true}
      zoomControlEnabled={true}
      toolbarEnabled={false}>
      {retailerMasters
        .filter(isMarkerVisible)
        .map((retailer: RetailerMasterBO) => {
          return (
            <Marker
              key={retailer.RetailerID}
              coordinate={{
                latitude: Number(retailer.Latitude),
                longitude: Number(retailer.Longitude),
              }}
            />
          );
        })}
    </MapView>
  );
};

export default MapviewComponent;
