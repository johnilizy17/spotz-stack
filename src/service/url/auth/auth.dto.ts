interface loginDto {
    email: string;
    password: string;
}

interface phoneDto {
    phoneNumber?: string;
}

interface refreshTokenDto {
    refreshToken?: string;
}

interface smsVerificationDto {
    phoneNumber?: string;
    verificationCode?: string;
}

interface tokenDto {
    token: any;
}

interface locationDto {
    lat: string;
    lng: string;
}

interface emailDto {
    email: string;
    id: string;
}

interface emailForgottenDto {
    email: string;
}

interface locationAddressDto {
    user_id: string;
    data: any,
    address: string
}

interface claimAddressDto {
    user_id: string;
}

interface verifyAddressDto {
    user_id: string;
    data: any
}

interface registerDto {
    email: string;
    phoneNumber: string;
    name?: string;
}

interface signUpDto {
    phone?: string;
}