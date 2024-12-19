import instance from "../../axios";
import Serive from "../../service";

export const getInterest = async () => {
    const { data } = await Serive.get(`api/v1/interest/`);
    return data
};