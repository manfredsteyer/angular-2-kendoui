declare module 'app/oauth2/oauth-service' {


    class OAuthService {
        clientId: string;
        redirectUri: string;
        loginUrl: string;
        scope: string;
        rngUrl: string;
        oidc: boolean;
        options: any;
        state: string;
        issuer: string;
        validationHandler: any;
        createLoginUrl(state: any): any;
        initImplicitFlow(additionalState?: string): void;
        callEventIfExists(options: any): void;
        tryLogin(options: any): boolean;
        processIdToken(idToken: any, accessToken: any): boolean;
        getIdentityClaims(): any;
        getIdToken(): any;
        padBase64(base64data: any): any;
        tryLoginWithIFrame(): void;
        tryRefresh(timeoutInMsec: any): void;
        getAccessToken(): any;
        hasValidAccessToken(): boolean;
        hasValidIdToken(): boolean;
        logOut(): void;
        createAndSaveNonce(): any;
        createNonce(): any;
        getFragment(): {};
        parseQueryString(queryString: any): {};
        checkAtHash(accessToken: any, idClaims: any): boolean;
    }

}