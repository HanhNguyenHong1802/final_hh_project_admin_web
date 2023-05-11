/* eslint-disable */
/// <reference types="@vue/cli-service" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare type A = any;
declare type valueof<T> = T[keyof T];
declare interface IAFS {
  isSessionTimeout: (sessionOutDuration?: number) => boolean;
}
declare interface Window {
  context?: IContext;
  afs: IAFS;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: A;
}

declare interface IContext {
  readonly name: "dte-context";
  readonly env: "development" | "test" | "production";
  readonly code?: number;
  readonly api?: string;
  readonly username?: string;
  readonly originalUrl?: string;
  readonly terms?: string;
  readonly localeId?: string;
  readonly timezone?: string;
  readonly accessToken?: string;
  readonly token?: string;
  readonly displayName?: string;
  readonly expires?: number;
  readonly realm?: string;
  readonly user?: {
    CustomerId: string;
    DataCenter: string;
    DisplayName: string;
    ParentGroups: A[];
    Roles: Array<number>;
    UserName: string;
    UserObjectId: string;
    UserId: string;
    Language: string;
    SessionOutDuration: number;
    [key: string]: A;
  };
  readonly AOSURL?: string;
  readonly APIURL?: string;
  readonly CDNURL?: string;
  readonly redirectUri?: string;
  readonly identityService?: string;
  readonly clientId?: string;
  readonly vCloud?: string;
  readonly sessionId?: string;
  readonly needShowLicenseAgreement?: string;
}
