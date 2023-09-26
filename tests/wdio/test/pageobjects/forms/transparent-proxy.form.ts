import { $ } from "@wdio/globals";
import Page from "../page.js";

export class TransparentProxyForm extends Page {
    async setAuthorizationFlow(selector: string) {
        await this.searchSelect(
            '>>>ak-flow-search[name="authorizationFlow"] input[type="text"]',
            "authorizationFlow",
            `button*=${selector}`
        );
    }

    get externalHost() {
        return $('>>>input[name="externalHost"]');
    }

    get internalHost() {
        return $('>>>input[name="internalHost"]');
    }
}

export default new TransparentProxyForm();
