import {Attribute} from "./attribute";

export class KeycloakUser {
  id?: string | null;
  email?: string | null;
  emailVerified?: boolean | null;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  attributes?: Attribute | null;

}
