import Clova from './types';
export declare class SkillConfigurator implements Clova.SkillConfigurator {
    config: {
        requestHandlers: {
            [index: string]: Function;
        };
    };
    constructor();
    /**
     * Add a request handler for a given request type.
     *
     * @param {String} requestType
     * @param {Function} requestHandler
     * @returns
     * @memberOf SkillConfigurator
     */
    on(requestType: string, requestHandler: Function): this;
    /**
     * Add LaunchRequest handler for clova request.
     *
     * @param requestHandler
     */
    onLaunchRequest(requestHandler: Function): this;
    /**
     * Add IntentRequest handler for clova request.
     *
     * @param requestHandler
     */
    onIntentRequest(requestHandler: Function): this;
    /**
     * Add SessionEndedRequest handler for clova request.
     *
     * @param requestHandler
     */
    onSessionEndedRequest(requestHandler: Function): this;
    /**
     * Create esxpress route handler for dispatching request.
     *
     * @returns {Function}
     * @memberOf SkillConfigurator
     */
    handle(): Function;
}
export default class Client {
    /**
     * Create SkillConfigurator for clova skills.
     *
     * @returns SkillConfigurator
     */
    static configureSkill(): SkillConfigurator;
}
