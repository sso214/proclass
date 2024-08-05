export const URLS = {
  AUTH: {
    SIGN_IN: '/auth/signin',
    SIGN_IN_OTP: '/auth/signin/otp',
    SIGN_IN_RESET_PASSWORD_EMAIL: '/auth/signin/reset-password/email',

    SIGN_UP: '/auth/signup',
    SIGN_UP_PASSWORD: '/auth/signup/password',
    SIGN_UP_EMAIL_SENDING: '/auth/signup/email/sending',
    SIGN_UP_EMAIL_CONFIRM: '/auth/signup/email/confirm',

    SIGN_UP_MEMBER_CONFIRM: '/auth/member-signup-confirm',
    SIGN_UP_MEMBER_PASSWORD: '/auth/member-signup-password',
    RESET_PASSWORD: '/auth/reset-password',
    LOGOUT: '/auth/logout',
  },
  CONSOLE: {
    MYPAGE: '/console/mypage',
    HOME: '/console/home',
    TRANSACTION: '/console/transaction',
    WITHDRAW: '/console/withdraw',

    TEAM: '/console/team',
    TEAM_INFO: '/console/team/info',
    TEAM_MEMBER: '/console/team/member',
    TEAM_SECURITY: '/console/team/security',
    TEAM_LOG: '/console/team/log',

    WALLET: '/console/wallet',
    WALLET_ASSETS: '/console/wallet/:walletId/assets',
    WALLET_ADDRESS: '/console/wallet/:walletId/address',
    WALLET_PERMISSION: '/console/wallet/:walletId/permission',
    WALLET_SETTING: '/console/wallet/:walletId/setting',
  },
  ERROR: {
    ERROR_403: '/error/403',
    ERROR_404: '/error/404',
    ERROR_500: '/error/500',
  },
  OUT_LINK: {
    TERMS_SERVICE: '',
    PRIVACY_POLICY: '',
    GOOGLE: 'https://www.google.co.kr',
    OUTLOOK: 'https://outlook.live.com/owa/0/?state=1&redirectTo=aHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC9pbmJveC8',
  },
} as const;
