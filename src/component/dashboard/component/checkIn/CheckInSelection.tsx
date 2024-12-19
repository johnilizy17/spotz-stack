import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { HeaderSettingInfo } from '../Header';
import ActivImageSelect from './ActiveImageSelect';
import LocationPop from '../locationPop';
import EmptyCheckIn from './EmptyCheckIn';
import { getData } from '../../../../service/url/variable/asyncStorage';
import { getAllUserChecked, getSingleSpot } from '../../../../service/url/checkin/usersCheckin';
import { useDispatch, useSelector } from 'react-redux';
import { storeCheckData, storeCheckInLocation } from '../../../../features/slice/checkinSlice';

export default function CheckInSelection() {

    const [arrayData, setArrayData] = useState([])

    const [more, setMore] = useState(false)
    const dispatch = useDispatch();

    const checkIn = useSelector((a: { checkin: any }) => a.checkin)


    async function FetchCheckIn() {
        const result = await getAllUserChecked();
        const location = await getSingleSpot();
        dispatch(storeCheckInLocation(location.data))
        dispatch(storeCheckData(result))
    }
    useEffect(() => {
        FetchCheckIn()
    }, [])


    return (
        <>
            {checkIn.arrayData.length > 0.5 ?
                <View style={{ flex: 1 }}>
                    <HeaderSettingInfo setMove={setMore} title={checkIn.location.name} />
                    <ScrollView
                        pagingEnabled
                    >
                        {checkIn.arrayData.map((a: any, b: number) => (<ActivImageSelect item={a} key={b} />))}
                    </ScrollView>
                </View>
                :
                <EmptyCheckIn />
            }
            {more && <LocationPop setMatchPage={setMore} CheckinPop={more} />}
        </>
    )
}