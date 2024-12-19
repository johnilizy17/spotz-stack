import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { storeData } from "../../service/url/variable/asyncStorage";

export default function CheckInButton() {

    const navigation = useNavigation()

    return (
        <Button onPress={async () => {
            await storeData("checkin", "6762c6ff496503829731b21a")
            navigation.navigate("CheckInSelfiePage" as never)
        }}>
            go
        </Button>
    )
}