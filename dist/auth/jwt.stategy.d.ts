import { Strategy } from "passport-jwt";
import { JwtPayload } from "./interface/jwt-payload.interface";
declare const JwtStategy_base: new (...args: any[]) => Strategy;
export declare class JwtStategy extends JwtStategy_base {
    constructor();
    validate(payload: JwtPayload): Promise<JwtPayload>;
}
export {};
