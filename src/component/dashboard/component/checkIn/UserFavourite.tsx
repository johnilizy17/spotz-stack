import React from 'react';
import DashboardAuth from '../../../../constants/HOC/DashboardAuth';
import { HeaderSettingMenu } from '../Header';
import CheckinCard from './CheckInCard';
import AboutMeSection from './AboutMeSection';
import { ScrollView } from 'react-native';
import CommentSection from './CommentSection';
import FavouriteEmpity from '../favourite/FavouriteEmpity';

export default function UserFavourite() {

    const array: any = []
    return (
        <>
            {array.length > 0.5 ?
                <>
                    <HeaderSettingMenu title='Paityn Lubin, 23' />
                    <ScrollView>
                        <CheckinCard state={false} />
                        <AboutMeSection />
                        <CommentSection />
                        <CheckinCard state={true} />
                        <AboutMeSection />
                        <CommentSection />
                    </ScrollView>
                </>
                :
                <FavouriteEmpity />
            }
        </>
    )
}