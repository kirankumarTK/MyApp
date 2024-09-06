import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {MapviewComponentModel, RetailerMasterBO} from '../models/commonModels';
import {useAppSelector} from '../redux/hooks';

const MapviewComponent: React.FC<MapviewComponentModel> = ({mapStyle}) => {
  const retailerMasters = useAppSelector(
    state => state.retailerMastrSlice.retailerMasters,
  );

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
      showsUserLocation={true}
      zoomEnabled={true}
      zoomControlEnabled={true}
      toolbarEnabled={false}>
      {retailerMasters.map((retailer: RetailerMasterBO, index: number) => {
        return (
          <Marker
            key={retailer.RetailerID}
            coordinate={{
              latitude: Number(retailer.Latitude),
              longitude: Number(retailer.Longitude),
            }}></Marker>
        );
      })}
    </MapView>
  );
};

export default MapviewComponent;
