import instance from "../../axios";

export const authVerifySMS = async (payload: smsVerificationDto) => {
    const { data } = await instance.post(`api/v1/auth0/verify-sms-otp`, payload);
    return data
};

export const RefreshToken = async (payload: refreshTokenDto) => {
    const { data } = await instance.post(`/api/v1/auth0/refresh`, payload);
    return data
};

export const EmailVerfy = async (payload: emailDto) => {
    const { data } = await instance.post(`/api/v1/auth0/update-email/${payload.id}`, { email: payload.email });
    return data
};
 
export const getProfile = async (user_id: string) => {
    const { data } = await instance.post(`/api/v1/activeUser/get-all-users/${user_id}`);
    return data
};

export const authLogin = async (payload: phoneDto) => {
    const { data } = await instance.post(`/api/v1/auth0/login`, payload);
    return data
};

export const authRegister = async (payload: signUpDto) => {
    const { data } = await instance.post(`/api/v1/auth0/signup`, payload);
    return data
};