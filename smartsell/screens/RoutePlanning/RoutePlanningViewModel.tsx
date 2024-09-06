import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import AppDatabase from '../../Commons/DataBaseHelper';
import {RetailerMasterBO} from '../../models/commonModels';
import {setRetailerDetails} from './RetailerMasterSlice';

export const RoutePlanningViewModel = () => {
  const retailerMasters = useAppSelector(
    state => state.retailerMastrSlice.retailerMasters,
  );
  const dispatch = useAppDispatch();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  useEffect(() => {
    if (retailerMasters.length <= 0) {
      let query =
        "Select DISTINCT(RM.RetailerID),count(IM.taskid) as TaskCount,RM.RetailerName,RA.Address1,RA.Latitude,RA.Longitude FROM RetailerMaster as RM INNER JOIN RetailerAddress as RA on RM.RetailerID = RA.RetailerID AND RA.IsPrimary=1 Left JOIN IssueMaster IM on IM.RetailerID = RM.RetailerID AND IM.Status = 'O' group by RM.RetailerID ORDER BY TaskCount DESC";
      AppDatabase.executeFetch(query)
        .then((result: Array<RetailerMasterBO>) => {
          dispatch(setRetailerDetails(result));
        })
        .catch(error => console.log(error));
    }
  }, []);

  const getCurrentDate = () => {
    let now = new Date();
    let monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[now.getMonth()] + ' ' + now.getDate();
  };
  return {retailerMasters,getCurrentDate,isEnabled,toggleSwitch};
};
