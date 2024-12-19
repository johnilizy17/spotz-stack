import React, { useEffect, useState } from 'react';
import DashboardAuth from '../../../../constants/HOC/DashboardAuth';
import { HeaderSettingMenu } from '../Header';
import CheckinCard from './CheckInCard';
import AboutMeSection from './AboutMeSection';
import { ScrollView, View } from 'react-native';
import CommentSection from './CommentSection';
import { getSingleService } from '../../../../service/url/image/ImageUpload';

export default function CheckIn({ route }: any) {

    const [images, setImage] = useState([])

    const fetchImage = async () => {
        try {
            const result = await getSingleService(route.params.id)
            setImage(result.data)
        } catch (err) {
            console.log(err, "err")
        }
    }

    useEffect(() => {
        fetchImage()
    }, [])

    return (
        <DashboardAuth>
            <HeaderSettingMenu title={route.params.name} />
            <ScrollView>
                <CheckinCard item={route.params.selfieUrls[0]} interest={route.params.interests} state={false} />
                <AboutMeSection item={route.params} />
                <CommentSection comment={route.params.prompts[0]} />
                {
                    images.map((a, b) => (
                        <View key={b} style={b > 0.5 ? { display: "flex" } : { display: "none" }}>
                            <CheckinCard item={a} state={true} />
                        </View>
                    ))
                }{
                    route.params.prompts.map((a: any, b: any) => (
                        <View key={b} style={b > 0.5 ? { display: "flex" } : { display: "none" }}>
                            <CommentSection comment={a} />
                        </View>
                    ))
                }
                <View style={{ height: 50 }} />
            </ScrollView>
        </DashboardAuth>
    )
}